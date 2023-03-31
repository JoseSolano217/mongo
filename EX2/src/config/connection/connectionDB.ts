import { connect } from "mongoose";

const connectionDB = () => {
    const URL = String(process.env.URL_MONGO)

    connect(URL).then(() => {
        console.log("Connected to " + URL)        
    }).catch((e) => {
        console.log(e)
    });
}

export default connectionDB;