import React from 'react';
export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([
    {
      id: crypto.randomUUID(),
      message: "welcome its a success",
      variant: 'notice',
    }
  ]);

  function createToast(message, variant){
    const nextToast = [
      ...toasts, 
    {
      id: crypto.randomUUID(),
      message,
      variant,
    }
  ];

    setToasts(nextToast);
  }

  function dismissToast(id){
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id
    });

    setToasts(nextToasts);
  }

  return (
    <ToastContext.Provider value={{ toasts, createToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
