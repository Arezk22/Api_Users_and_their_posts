
// 1 )  Create your own function that accepts multiple parameters to 
// generate course information and display it. assume course 
// information must contains courseName, courseDuation, 
// courseOwner. 

// const course1 = {
//     courseName: "React",
//     courseDuration: "2 Months",
//     courseOwner: "Ali"
// }
// const course2 = {
//     courseName: "python",
//     courseDuration: "6 Months",
//     courseOwner: "Ahmed"
// }
// const course3 = {
//     courseName: "java",
//     courseDuration: "1 Months",
//     courseOwner: "mohamed"
// }
// function generateCourseInfo(...courses){  

//   for(let course of courses){
//     console.log("----------Course--------------")
//     for(let [key , value] of Object.entries(course)) {
//       console.log(`${key} : ${value}`)
//     }
//   }
// }
// generateCourseInfo(course1 , course2 , course3)
//================================================================

// 2

const [tabsContainer] = document.querySelectorAll(".tabs");
const [postsContainer] = document.querySelectorAll(".posts");


function getUsers() {

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {

          console.log(data);
            data.forEach(user => {

                const tab = document.createElement("button");
                tab.textContent = user.name;
                tab.dataset.id = user.id;
                tabsContainer.appendChild(tab);

                // click event
                tab.addEventListener("click", async function () {

                    const userId = this.dataset.id;
                    console.log(userId);
                    await getPosts(userId);

                });

            });

        })
        .catch(error => console.log(error));

}
getUsers();
async function getPosts(userId) {

    try {

        let response = await fetch(
            `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
        );

        const posts = await response.json();
        // clear old posts
        postsContainer.innerHTML = "";

        posts.forEach(post => {
            const postTitle = document.createElement("p");
            postTitle.textContent = post.title;
            postsContainer.appendChild(postTitle);
        });
    } catch (error) {
        console.log("Error fetching posts:", error);
    }

}