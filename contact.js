const clientslist = [];
document.querySelector(".submit").addEventListener("click",(e)=>{
    e.preventDefault()
    let client = {name:"",mail:"",message:""}

    let name = document.getElementById('name').value;
    let mail = document.getElementById('mail').value;
    let message = document.getElementById('message').value;

    client.name = name;
    client.mail = mail;
    client.message = message;

    clientslist.push(client);
})
document.querySelector(".display").addEventListener("click");
e.preventDefault();
console.log(clientslist)

    






































  // You can do further processing with the form data object here
            
            // Optionally, you can send the form data to a server using AJAX
            // Example: You can use fetch API to send the data to your server
            // fetch('your-server-url', {
            //     method: 'POST',
            //     body: JSON.stringify(formDataObject),
            //     headers: {
            //         'Content-Type': 'application/json'
            //     }
            // }).then(response => {
            //     // Handle response from server
            // }).catch(error => {
            //     // Handle error
            // });
