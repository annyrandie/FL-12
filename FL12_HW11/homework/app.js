const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

// Todo: your code goes here

function drawFileTree(data) {
  const rootNode = document.getElementById('root');
  let ulWrap = document.createElement('ul');
  rootNode.appendChild(ulWrap);
  let i, j, k;
  const CURSOR_PIXELS = 8;

for(i = 0; i<data.length; i++) {
  const liWrap = document.createElement('li');
  ulWrap.appendChild(liWrap);
  const folderWrapper = document.createElement('div');
  liWrap.appendChild(folderWrapper);
  folderWrapper.classList.add('folderFile-wrapper', 'expand');

  folderWrapper.addEventListener('click', function() {
    this.parentElement.querySelector('.nested').classList.toggle('active');
    folder.classList.toggle('folder-open');
    
  });
  let dot = document.createElement('div');
  document.body.appendChild(dot);
  folderWrapper.addEventListener('mousedown', e => {
    dot.style.left = e.pageX - CURSOR_PIXELS + 'px';
    dot.style.top = e.pageY - CURSOR_PIXELS + 'px';
    dot.classList.add('dot'); 
  } );
  folderWrapper.addEventListener('mouseup', () => {
    dot.classList.remove('dot');
  } );
  const span = document.createElement('span');
  folderWrapper.appendChild(span);
  const folder = document.createElement('i');
  span.innerText = structure[i]['title'];
  folder.classList.add('material-icons');
  
  folder.classList.add('folder-closed');
  span.before(folder);
  span.classList.add('folder-name');
  const ulNested = document.createElement('ul');
  liWrap.appendChild(ulNested);
  ulNested.classList.add('nested');

  for(j = 0; j<data[i]['children'].length; j++) {
    const lilevelTwo = document.createElement('li');
    ulNested.appendChild(lilevelTwo);
    const divWrap = document.createElement('div');
    lilevelTwo.appendChild(divWrap);
    const spanLevelTwo = document.createElement('span');
    divWrap.appendChild(spanLevelTwo);
    spanLevelTwo.innerText = structure[i]['children'][j]['title'];
    const folderFile = document.createElement('i');
    folderFile.classList.add('material-icons');
    spanLevelTwo.before(folderFile);
    divWrap.classList.add('folderFile-wrapper');
    divWrap.addEventListener('mousedown', e => {
      dot.style.left = e.pageX - CURSOR_PIXELS + 'px';
      dot.style.top = e.pageY - CURSOR_PIXELS + 'px';
      dot.classList.add('dot'); 
    } );
    divWrap.addEventListener('mouseup', () => {
      dot.classList.remove('dot');
    } );
    if(Object.keys(data[i]['children'][j]).includes('folder')) {
      folderFile.classList.add('folder-closed');
      divWrap.classList.add('expand');
      divWrap.addEventListener('click', function() {
      this.parentElement.querySelector('.nested').classList.toggle('active');
      folderFile.classList.toggle('folder-open');
      })
    } else {
      folderFile.innerText = 'insert_drive_file';
      folderFile.classList.add('grey');
    }
    if(Object.keys(data[i]['children'][j]).includes('folder')) {
      const ulLevelTwo = document.createElement('ul');
      lilevelTwo.appendChild(ulLevelTwo);
      ulLevelTwo.classList.add('nested');
      if(Object.keys(data[i]['children'][j]).includes('folder') ===true 
      && data[i]['children'][j]['children'] === null) {
        const ulEmptyOne = document.createElement('ul');
        lilevelTwo.appendChild(ulEmptyOne);
        ulEmptyOne.classList.add('nested');
        const liEmptyOne = document.createElement('li');
        ulEmptyOne.appendChild(liEmptyOne);
        liEmptyOne.innerText = 'The folder is empty';
        liEmptyOne.classList.add('empty-folder');
        
        divWrap.addEventListener('click', function() {
          this.nextSibling.nextSibling.classList.toggle('active');
        })
      }  

      for(k=0; k <data[i]['children'][j]['children'].length; k++ ) {
        const liLevelThree = document.createElement('li');
        ulLevelTwo.appendChild(liLevelThree);
        const divWrapTwo = document.createElement('div');
        liLevelThree.appendChild(divWrapTwo);
        const spanLevelThree = document.createElement('span');
        divWrapTwo.appendChild(spanLevelThree);
        spanLevelThree.innerText = structure[i]['children'][j]['children'][k]['title'];
        const folderOrFile = document.createElement('i');
        folderOrFile.classList.add('material-icons');
        spanLevelThree.before(folderOrFile);
        divWrapTwo.classList.add('folderFile-wrapper');
        divWrapTwo.addEventListener('mousedown', e => {
          dot.style.left = e.pageX - CURSOR_PIXELS + 'px';
          dot.style.top = e.pageY - CURSOR_PIXELS + 'px';
          dot.classList.add('dot'); 
        } );
        divWrapTwo.addEventListener('mouseup', () => {
          dot.classList.remove('dot');
        } );
        if(Object.keys(data[i]['children'][j]['children'][k]).includes('folder')) {
          folderOrFile.classList.add('folder-closed');
          divWrapTwo.classList.add('expand');

          divWrapTwo.addEventListener('click', function() {
          this.parentElement.querySelector('.nested').classList.toggle('active');
          folderOrFile.classList.toggle('folder-open');
          })
        } else {
          folderOrFile.innerText = 'insert_drive_file';
          folderOrFile.classList.add('grey');
        }
        if(Object.keys(data[i]['children'][j]['children'][k]).includes('folder') 
        && structure[i]['children'][j]['children'][k]['children'] !== true) {
          const ulEmpty = document.createElement('ul');
          liLevelThree.appendChild(ulEmpty);
          ulEmpty.classList.add('nested');
          const liEmpty = document.createElement('li');
          ulEmpty.appendChild(liEmpty);
          liEmpty.innerText = 'The folder is empty';
          liEmpty.classList.add('empty-folder');
        }
      }
    } else {
      console.log('empty');
    }
  }
}
}

drawFileTree(structure);