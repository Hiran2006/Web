if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
);
else {
  alert(
    "Only avaliable on mobile devices. Please use a mobile device to access this page."
  );
  history.back();
}
