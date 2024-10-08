window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');

  if (code) {
    console.log('Authorization code:', code);
    // この部分で、バックエンドにPOSTしてアクセストークンを取得するなどの処理を行います。
  }
};
