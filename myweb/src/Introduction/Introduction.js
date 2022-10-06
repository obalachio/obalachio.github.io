import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Contact from '../Contact/Contact';

function Introduction(props){

    const lang = props.lang;
    const switchLang = props.switchLang;

    if(lang === "Chinese"){
        return (
            <>
            <Container max-width="sm" id='introduction'>
                <h3 style={{marginTop:50, marginBottom:50}}>
                    关于我们
                </h3>
                <div>
                    <p>
                        Kanzom咨询是由国内母公司云南昆明正光科技有限公司注资。
                        昆明正光科技有限公司成立于1997年，深耕国内西南地区医疗25年。
                        97年起，作为多家国际医疗器械龙头企业的云南总代理涉及多项医疗科室领域；
                        西门子放射产品（DR ，CT，etc） 、美国COOK Medical放射介入产品 、
                        美国Gore Medical （覆膜支架，人工血管）、飞利浦彩超、日本TERUMO放射产品。
                        25年的风雨积累，使母公司对中国医疗体系系统、市场具有敦实的了解。
                    </p>
                    <p>
                        Kanzom咨询的成立将目标赛道瞄准向国际转诊，代表正光对全球市场的探索以及业务模式的创新。
                        昆明地处中国西南边陲，医疗技术相对落后且医疗条件、资源匮乏，群众就医水平显著低于国内沿海发达地区。
                        Kanzom咨询与其母公司云南昆明正光科技有限公司一直以传播医学技术为责任。
                        孜孜不倦的试图通过国际合作、信息管理及技术引进弥补地域及国际医学技术代差。
                        正光科技在2015年领导引进了刚刚通过FDA审查的戈尔胆内覆膜支架，更新换代了西南乃至全中国的肝纤维化手术，
                        使手术成功率提高了20%-30%。
                    </p>
                </div>
            </Container>
            <Contact lang={lang} switchLang={switchLang}/>
            </>
        )
    }
    return (
        <>
        <Container max-width="sm" id='introduction'>
            <h3 style={{marginTop:50, marginBottom:50}}>
                About us
            </h3>
            <div>
                <p>
                Kanzom consulting was founded in 2022.
                Our group is made of experts who have 20
                years experience of in the medical industry,
                analysis from China Securities, and
                graduate students of the University of
                Southern California. Currently, Kanzom
                consulting is focused on the corporation
                with hospitals and the market research
                conducted by the kanzom consulting team.
                </p>
                
            </div>
        </Container>
        </>
    )

}

export default Introduction;