/**
 * SORTING NODES WITHIN A CONTAINER
 * Please, make sure to read the following files in the exercises-info folder before you start
 * * 01 SelectNodes.md
*/

/**
 * @task
 * Select all elements that have class of "item" as a NodeList.
 * Store them in the allItems variable
 * Example: const allItems = <Your code>;
 */

// Your code goes here...

const allItems = document.querySelectorAll('.item');

/**
 * @task
 * Select the main container by the id of "main"
 * Store it in the main constant
 * Example: const main = <Your code>
 * */

// Your code goes here

const main = document.querySelector('#main');

/**
 * @task
 * Select the favorites container by id of "favs"
 * Store it in the favs constant
 * Example: const favs = <Your code>;
 */

// Your code goes here

const favs = document.querySelector('#favs');

/**
 * @task
 * Create the updateCollections(id, direction) function that follows the list of requirements:
 * Takes an argument of the item id (number)
 * Take an argument of direction as a string value of 'toMain' or 'toFavs'
 * Moves the element from the current parent to the new parent (from main to favs or vice versa)
 * Changes the icon of the element: fa-heart-circle-plus for main, fa-heart-crack for favs items.
 */

// Your code goes here

const updateCollections = (id, direction) => {
  const element = document.getElementById(id);
  if (direction === 'toMain') {
    main.appendChild(element);
    element.firstElementChild.classList.add('fa-heart-circle-plus');
    element.firstElementChild.classList.remove('fa-heart-crack');
  } else if (direction === 'toFavs') {
    favs.appendChild(element);
    element.firstElementChild.classList.add('fa-heart-crack');
    element.firstElementChild.classList.remove('fa-heart-circle-plus');
  }
}

/**
 * @task
 * Iterate through the every item in allItems NodeList and apply the
 * addEventListener click event to each item.
 * The item click must execute/call the following:
 * * Get the current item's parent id ('main' or 'favs')
 * * Get the current item id (a number value)
 * * Set the direction constant to be equal to 'toFavs' or 'toMain', based off the current location
 * * The direction means the collection to move the item into, when the item is clicked
 * * If the correct item's location is the parent of id 'main' -> the direction is 'toFavs'
 * * If the correct item's location is the parent of id 'favs' -> the direction is 'toMain'
 * * Make the updateCollections function call, assign the item Id and the direction defined above
 */

// Your code goes here...


allItems.forEach(item => {
  item.addEventListener('click', () => {
    const elm = document.getElementById(item.id);
    const parent = elm.parentNode.id;
    const direction = (parent === 'main') ? 'toFavs' : 'toMain';
    updateCollections(item.id, direction);
  })
})