import React from "react";
import Header from "../Header/Header";
import Title from "./Title/Title";
import Container from "react-bootstrap/esm/Container";

function Home(props){
    const lang = props.lang;
    const handleClick = props.handleClick;

    if(lang === "English"){
        <>
            <Title />
            <Container fluid="sm">
            <h2>
                Service
            </h2>
            <p>
                Customized international medical traveling
                and global concierge care, big data medical
                service, medical conference undertaking,
                genetic testing, telemedicine consultation,
                Multiple Disciplinary Team under global
                background
            </p>
            <h2>
                Our Belief
            </h2>
            <p>
                Kunming, where Kanzom consulting
                originally from, is located in the 
                southwestern border of China, with
                relatively backward medical technology
                and lack of medical conditions and
                resources. Kanzom Consulting adhere to 
                the responsibility of promoting the level of
                medical treatment, and strive to make up
                for the regional and international medical
                technology generation gap through
                international medicine cooperation,
                information express and technology
                introduction.
            </p>
            </Container>
        </>
    }

    return (
        <>
            <Title />
            <Container fluid="sm">
            <h2>
                业务范围
            </h2>
            <p>
                定制化国际转诊及康养、大数据医疗服务、医学
                会议承接、基因检测、远程医疗咨询、中美医生
                联合诊疗

            </p>
            <h2>
                企业理念
            </h2>
            <p>
                昆明地处中国西南边陲，医疗技术相对落后且医
                疗条件、资源匮乏，群众就医水平显著低于国内
                沿海发达地区。Kanzom咨询与其母公司云南昆
                明正光科技有限公司秉承以推广就医水平为责
                任，孜孜不倦的试图通过国际合作、信息管理及
                技术引进弥补地域及国际医学技术代差。正光科
                技在2015年领导引进了刚刚通过FDA审查的戈尔
                覆膜支架，更新换代了西南乃至全中国的经颈静
                脉肝内门体分流手术，使酒精肝等肝纤维化疾病
                治愈率提高了20%-30%。
                Kanzom咨询继承正光科技传播前沿医疗技术造
                福患者的理念，力图使患者获得到更先进的医疗
                资源。
            </p>
            </Container>
        </>
    )
}

export default Home;