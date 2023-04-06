function sucess(response){
    console.log(`welcome`)

}
function failure(response){
    console.log(`please close the tab and come back 1 hour later`)
}
axios.request({
    url:`https://jsonplaceholder.typicode.com/posts`
}).then(sucess).catch(failure);

axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(function (response) {
    // handle success
    console.log(response);

    var data = response.data;

    for (var i = 0; i < data.length; i++) {
      var post = data[i];

      var titleElement = document.createElement('h3');
      titleElement.textContent = post.title;

      var bodyElement = document.createElement('p');
      bodyElement.textContent = post.body;

      document.body.appendChild(titleElement);
      document.body.appendChild(bodyElement);
    }
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

  axios.get(`https://random.dog/24178-5036-5513.jpg`)
  .then(function (response) {
    // handle success
    console.log(response);

    var data = response.data;

    for (var i = 0; i < data.length; i++) {
      var post = data[i];

      var titleElement = document.createElement('h3');
      titleElement.textContent = post.title;

      var bodyElement = document.createElement('p');
      bodyElement.textContent = post.body;

      document.body.appendChild(titleElement);
      document.body.appendChild(bodyElement);
    }
  })
  .catch(function (error) {
    // handle error
    console.log(error);

    var errorElement = document.createElement('p');
    errorElement.textContent = 'An error has occurred. Please try again later.';

    document.body.appendChild(errorElement);
  })
  .then(function () {
    // always executed
  });




