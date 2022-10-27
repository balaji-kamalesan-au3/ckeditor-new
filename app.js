import BalloonEditor from '@ckeditor/ckeditor5-build-balloon';
// import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
// import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
// import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
// import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Comments from '@ckeditor/ckeditor5-comments/src/comments';

BalloonEditor
    .create( document.querySelector( '#editor' ), {
        plugins :[Comments],
        toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', '|','comment' ],
        
        heading: {
            options: [
                { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
            ]
        }
    } )
    .catch( error => {
        console.log( error );
    } );