import { StyledContainer } from "./home";
import { Container, Footer, Title } from "./lib/general";
import me from "./assets/me.png"
import { ReactComponent as RightArrow } from "./assets/blueRightArrow.svg"
import { ReactComponent as Lock } from "./assets/lock.svg"
import { ReactComponent as Exit } from "./assets/exit.svg"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function MyPage() {
    const [petName, setPetName] = useState("골댕이");
    const [petImg, setPetImg] = useState(require("./assets/dog.jpg"));
    const navigate = useNavigate();
    const setImg = (pet: string) => {
        console.log(`./assets/${pet}.jpg`)
        setPetImg(require(`./assets/${pet}.jpg`));
    }
    useEffect(() => {
        if(localStorage.getItem("custom")){
            const custom = JSON.parse(localStorage.getItem("custom")!);
            const selected = JSON.parse(localStorage.getItem("selected")!);
            setPetName(custom.petName);
            if(custom.pet === "고양이") setImg("cat");
            else if(custom.pet === "앵무새") setImg("parrot");
            else if(custom.pet === "햄스터") setImg("hamster");
            else if(custom.pet === "토끼") setImg("rabbit");
        }
    })
    return (
        <StyledContainer className={`${Container} gap-5`}>
            <Title title="마이페이지" />
            <div className="flex justify-start w-[390px] pl-7 pt-5">
                <div className="text-white text-[22px] font-bold leading-7">내 반려동물</div>
            </div>
            <div onClick={() => navigate("/petName-change")} className="cursor-pointer bg-[#1d1f23cc] rounded-lg w-[340px] border border-[#212429;] pt-1 pb-6 px-4 text-white relative">
                <div className="flex items-center m-5 mb-0 gap-5">
                    <img src={petImg} className="w-14 h-14 rounded-md" />
                    <div className="flex flex-col">
                        <div className="text-white text-lg font-medium leading-normal">{petName}</div>
                        <div className="text-[#8c8c8c] text-xs font-normal leading-none">활발한 동반자</div>
                    </div>
                    <RightArrow className="absolute right-3 top-13" />
                </div>
            </div>
            <div className="w-[340px] h-[60px] pl-5 pr-3.5 py-3.5 bg-[#2d87f1] rounded-[14px] border-2 border-[#2d87f1] justify-between items-center gap-1 inline-flex">
                <div className="flex">
                    <div className="text-white text-base font-bold leading-tight">{petName}</div>
                    <div className="text-white text-base font-medium leading-tight pl-1">와 대화한 시간</div>
                </div>
                <div className="h-[39px] px-4 py-2 bg-[#1d1f23] rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                    <div className="text-white text-lg font-bold font-['Pretendard Variable'] leading-normal">n시간</div>
                </div>
            </div>
            <div className="flex justify-start w-[390px] pl-7">
                <div className="text-white text-[22px] font-bold leading-7">내 정보 관리</div>
            </div>
            <div onClick={() => navigate("/nickName-change")} className="cursor-pointer bg-[#1d1f23cc] rounded-lg w-[340px] border border-[#212429;] pt-1 pb-6 px-4 text-white relative">
                <div className="flex items-center m-5 mb-0 gap-5">
                    <img src={me} className="" />
                    <div className="flex flex-col">
                        <div className="text-white text-lg font-medium leading-normal">게스트</div>
                        <div className="text-[#8c8c8c] text-xs font-normal leading-none">guest@gmail.com</div>
                    </div>
                    <RightArrow className="absolute right-3 top-13" />
                </div>
            </div>
            <div className="w-[340px] h-[58px] pl-[18px] py-3.5 bg-[#212429] rounded-[14px] justify-start items-center gap-3 inline-flex">
                <Lock />
                <button onClick={() => navigate("/password-change")} className="text-[#c7c7c9] text-lg font-medium leading-normal">비밀번호 변경</button>
            </div>
            <div className="w-[340px] h-[60px] pl-[18px] py-3.5 bg-[#212429] rounded-[14px] justify-start items-center gap-3 inline-flex">
                <Exit />
                <button className="text-[#c7c7c9] text-lg font-medium leading-normal">로그아웃</button>
            </div>
            <button className="text-[#c7c7c9] text-[15px] font-normal leading-tight mb-28">회원탈퇴</button>
            <Footer />
        </StyledContainer>
    )
}