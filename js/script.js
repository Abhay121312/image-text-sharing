document.getElementById("post-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const text = document.getElementById("text-post").value;
  const imageInput = document.getElementById("image-upload");
  const postsContainer = document.getElementById("posts-container");

  if (text || imageInput.files.length > 0) {
    const post = document.createElement("div");
    post.classList.add("post");

    // Add text content
    if (text) {
      const textElement = document.createElement("p");
      textElement.textContent = text;
      post.appendChild(textElement);
    }

    // Add image content
    if (imageInput.files.length > 0) {
      const img = document.createElement("img");
      img.src = URL.createObjectURL(imageInput.files[0]);
      post.appendChild(img);
    }

    // Append post to the posts container
    postsContainer.insertBefore(post, postsContainer.firstChild);

    // Clear the form
    document.getElementById("text-post").value = "";
    document.getElementById("image-upload").value = "";
  }
});
