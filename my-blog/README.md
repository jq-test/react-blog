# My React Blog

A blog platform built with React and Vite.
This project currently only has a header and main component.

## Setup Instructions

1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`
4. Open http://localhost:5173 in your browser

## Project Structure
```
react-blog/
├── .gitignore
├── README.md
├── package.json
├── vite.config.js
└── src/
    ├── components/
    │   └── BlogPost
    │   └── BlogList
    │   └── CommentSection
    │   └── LikeButton
    │   └── PostEditor
    │   └── RichTextEditor
    │   └── TagInput
    │   └── Header
    ├── data/
    │   └── post.js
    ├── hooks/
    │   └── useImageHandler.js
    │   └── useValidateForm.js
    ├── utils/

    ├── App.jsx
    ├── main.jsx
    └── index.css
```

## Components Structure

- Header: Navigation and site title
- BlogList: Container for multiple posts
- BlogPost: Individual blog post display
    - Comment Section
    - Like Button
- Post Editor: Form 
    - Tag Input
    - Rich Text Editor 
    - Modal to preview post
    - Hooks for handling image upload and form validation. 

## Screenshot
0. First Draft <br>
![Heading Screenshot](./public/headingscreenshot.jpg)
1. Desktop Format <br>
![Blog Screenshot](./public/blogscreenshot.jpg.png)
2. Mobile Format <br>
![Mobile Screenshot](./public/mobilescreenshot.png)
3. Blog Post <br>
![Blog Post](./public/blogpost.png)
4. Preview of post: Save Draft *(Button Color in photo not updated)* <br> 
![Save Draft](./public/savedraft.png)
5. Preview of post: Publish Post *(Button Color in photo not updated)*<br>
![Publish Post](./public/publishpost.png)
## Styling Approach

- Color Theme: Purple
- Added some emojis for contrast.
- Each blog post is separated into its own container to differentiate between the different posts.
- Error message in red to catch user's attention to ensure that the user follows form requirement for blog post.

## New Features
- List of blog post that contains the title, content, author, date, and time it takes to read. 
- Blog post with prop types.
- A separate file to store the blog data.
- Shadow effect on hover and active.
- For blog post, user is required in form to have: title (5 character), content (100 characters), and one tag. 
- Uploading an image
- Live preview of post in a modal
- If user checks "publish immediately", button will change to "Publish Post." Otherwise, it would be "Save Draft" 