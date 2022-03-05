
export const FileUpload = async (file) => {
  const urlCloudinary = "https://api.cloudinary.com/v1_1/df90q7vvj/upload";
  const formData = new FormData();
  formData.append("upload_preset", "libros");
  formData.append("file", file);
  const resp = await fetch(urlCloudinary, {
    method: "POST",
    body: formData,
  });
  const cloudResp = await resp.json();
  return cloudResp.secure_url;
};
