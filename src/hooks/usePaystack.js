// Paystack inline checkout, used only by event checkout (EnrollModal).
// The script is loaded on demand the first time a payment starts, so it is
// no longer part of every page. Course checkout uses the server-side
// redirect in api/create-checkout.js and does not need this script.
const PAYSTACK_SRC = 'https://js.paystack.co/v1/inline.js'
let loading = null

function loadPaystack() {
  if (window.PaystackPop) return Promise.resolve(window.PaystackPop)
  if (!loading) {
    loading = new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = PAYSTACK_SRC
      script.async = true
      script.onload = () =>
        window.PaystackPop ? resolve(window.PaystackPop) : reject(new Error('Paystack unavailable'))
      script.onerror = () => {
        loading = null
        reject(new Error('Paystack failed to load'))
      }
      document.head.appendChild(script)
    })
  }
  return loading
}

export function usePaystack() {
  const pay = async ({ email, amount, name, onSuccess, onClose, metadata = {} }) => {
    let PaystackPop
    try {
      PaystackPop = await loadPaystack()
    } catch {
      alert('Payment service unavailable. Please check your connection.')
      if (onClose) onClose()
      return
    }
    const handler = PaystackPop.setup({
      key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || 'pk_test_placeholder',
      email,
      amount: amount * 100, // kobo
      currency: 'NGN',
      metadata: { custom_fields: [{ display_name: 'Name', variable_name: 'name', value: name }, ...Object.entries(metadata).map(([k, v]) => ({ display_name: k, variable_name: k.toLowerCase(), value: v })) ] },
      callback: (response) => {
        if (onSuccess) onSuccess(response)
      },
      onClose: () => {
        if (onClose) onClose()
      },
    })
    handler.openIframe()
  }

  return { pay }
}
