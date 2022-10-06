import React, {useState} from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";

const FORM_ENDPOINT="http://localhost:3001";

function Contact(props){
    const [submitted, setSubmitted] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [message, setMessage] = useState("");

    const switchLang = props.switchLang;
    const lang = props.lang;

    let handleSubmit = async (e) => {
        e.preventDefault();
        try{
            let res = await fetch("http://localhost:3001/contact", {
                method: "POST",
                mode: 'cors', 
                body: JSON.stringify({
                    name: name,
                    email: email,
                    mobileNumber: mobileNumber,
                    message: message,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            });
            let resJson = await res.json();
            console.log(resJson);
            if(res.status === 200){
                setSubmitted(true);
            } else {
                setSubmitted(false);
            }
        } catch (err){
            console.log(err);
        }
    }


    if (submitted){
        return (
            <Container max-width="sm" id="contact">
                <h3 style={{marginTop:50, marginBottom:50}}>
                    {switchLang(lang, ["联系方式", "Contact"])}
                </h3>
                <p>{switchLang(lang, ["感谢您提供联系方式", "Thank you for contacting"])}</p>
                <p>{switchLang(lang, ["我们将很快与您取得联系", "We will be in touch soon."])}</p>
            </Container>
        );
    }

    return (
        <Container max-width="sm"  id="contact">
            <h3 style={{marginTop:50, marginBottom:50}}>
                {switchLang(lang, ["联系方式", "Contact"])}
            </h3>
            <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
            >
                <div className="mt-3 mb-3 pt-0">
                    <input
                    type="text"
                    placeholder={switchLang(lang, ["姓名", "name"])}
                    name="name"
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
                </div>
                <div className="mt-3 mb-3 pt-0">
                    <input
                    type="email"
                    placeholder={switchLang(lang, ["邮箱", "Email"])}
                    name="email"
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </div>
                <div className="mt-3 mb-3 pt-0">
                    <input
                    type="tel"
                    placeholder={switchLang(lang, ["电话", "Phone Number"])}
                    name="phone"
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    onChange={(e) => setMobileNumber(e.target.value)}
                    />
                </div>
                <div className="mt-3 mb-3 pt-0">
                    <textarea
                    placeholder={switchLang(lang, ["留言", "Message"])}
                    name="message"
                    rows="6" cols="50"
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    />
                </div>
                <div className="mt-3 mb-3 pt-0">
                    <Button
                    className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-6 rounded shadow hover:shadow-lg outline-none focus:outline-none mt-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    >
                    {switchLang(lang, ["发送信息", "Submit"])}
                    </Button>
                </div>
            </form>
        </Container>
    );
}

export default Contact;