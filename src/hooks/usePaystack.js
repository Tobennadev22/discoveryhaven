export function usePaystack() {
  const pay = ({ email, amount, name, onSuccess, onClose, metadata = {} }) => {
    if (!window.PaystackPop) {
      alert('Payment service unavailable. Please check your connection.')
      return
    }
    const handler = window.PaystackPop.setup({
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
