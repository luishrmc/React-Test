export default function (prop) {
    if(prop.test){
        return prop.children
    } else {
        return false
    }
}