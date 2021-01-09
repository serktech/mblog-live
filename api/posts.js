import GhostContentAPI from "@tryghost/content-api";

//Add Ghost key and url
const api = new GhostContentAPI({
  url: "",
  key: "",
  version: "v3"
});

export async function getPosts() {
  return await api.posts
    .browse({
      limit: "all",
      include: "tags,authors"
    })
    .catch( err => {
      console.error(err);
    })

}
export async function getThreePosts() {
    return await api.posts
        .browse({
            limit: 3,
            include: "tags,authors"
        })
        .catch( err => {
            console.error(err);
        })

}
export async function getSixPosts() {
    return await api.posts
        .browse({
            limit: 6,
            include: "tags,authors"
        })
        .catch( err => {
            console.error(err);
        })

}
export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug
    })
    .catch(err => {
      console.error(err);
    })
}

export async function getPage(pageSlug) {
  return await api.pages
    .read({
      slug: pageSlug
    })
    .catch(err => {
      console.error(err);
    })
}
