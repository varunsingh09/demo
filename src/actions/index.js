export const POST_FORM_DATA = `POST_FORM_DATA`;


export function postForm() {
    console.log("come")
    return {
        type: POST_FORM_DATA,
        payload: 'success'
    }
}