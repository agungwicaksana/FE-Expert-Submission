import runtime from 'serviceworker-webpack-plugin/lib/runtime';

const serviceWorkerRegister = async () => {
  if ('serviceWorker' in navigator) {
    await runtime.register();
  } else {
    console.log('service Worker isn\'t supported in this browser');
  }
};

export default serviceWorkerRegister;
