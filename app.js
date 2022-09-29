/**
 *
 * @returns A promise that is designed to resolve with a list of hobbits, or potentially fail with an failure object. The failure object includes a boolean success property and a string message property.
 */

const error = document.querySelector("#error");
const list = document.querySelector("#list");


function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //I changed the number to < 50 here just so that I could see the fail message more often to check my work
      let potentialFail = Math.round(Math.random() * 100) < 50;
      if (potentialFail) {
        reject({ success: false, message: "Failed to get list of hobbits." });
      } else {
        resolve(["Bilbo", "Frodo", "Sam", "Merry", "Pippin"]);
      }
    }, 10);
  });
}

getList().then((result) => {
  result.forEach((hobbit) => {
    const li = document.createElement("li");
    li.textContent = hobbit;
    list.appendChild(li);
  })
}).catch((err) => {
  error.textContent = err.message;
})

// TODO: Handle the resolved or rejected states of the promise

// TODO: If the promise resolves with the list of hobbits
// Render the list of hobbits as list items within the unordered list with id="list" (check the index.html file)

// TODO: If the promise rejects with the failure object
// Display the failure message in the paragraph element with id="error" (check index.html file)
