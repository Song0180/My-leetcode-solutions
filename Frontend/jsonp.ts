const newScript = document.createElement('script');
newScript.src = 'https://some.api.com?callback=fn';
document.body.appendChild(newScript);
function fn(data: any) {
  console.log(data);
}
