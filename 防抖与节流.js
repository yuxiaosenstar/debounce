// 节流: n 秒内只运行一次，若在 n 秒内重复触发，只有一次生效
function throttle(fn, delay = 500) {
  let valid = true;
  return function (...arg) {
    if (!valid) {
      return false;
    }
    valid = false;
    setTimeout(() => {
      fn.apply(this, arg);
      valid = true;
    }, delay);
  };
}

// 防抖: n 秒后在执行该事件，若在 n 秒内被重复触发，则重新计时
function debounce(fn, delay = 500) {
  let timer = null;
  return function (...arg) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, arg);
    }, delay);
  };
}
