export interface Booth {
    id: string; // 3-digit numbering
    location: string; // Booth location (e.g., A1, B4)
    name: string;
    members: { nickname: string; twitter?: string; }[];
    description: string;
    tags: string[];
    imageUrl: string;
}

const RAW_BOOTH_DATA = [
    { "name": "\\\\무지개 왕 보러가야지~!//", "members": ["초과", "다락"] },
    { "name": "2년 내에 점프할 주식 알려드립니다", "members": ["놀🍮"] },
    { "name": "366타이카즈", "members": ["현밥"] },
    { "name": "3학년 프리즘반 쥬네 선생님", "members": ["흑돈"] },
    { "name": "그대의 봄날", "members": ["린예"] },
    { "name": "금교(은교보다 2배 쎔)", "members": ["Gom"] },
    { "name": "내 피는 녹색!", "members": ["팽이"] },
    { "name": "내가 저런 챠라챠라한 녀석과 사귀다니, 무리무리! (※무리가 아니었다?!)", "members": ["재랑", "장강"] },
    { "name": "니가 스트리트계의 카리스마인가 뭔가 하는 니시나카즈키냐", "members": ["김쿰"] },
    { "name": "돈갚아", "members": ["혜키", "하카"] },
    { "name": "두 사람의 샹그릴라 ~숙명의 웨딩 어게인~", "members": ["로레", "또기", "덤"] },
    { "name": "메르해피한 다과회", "members": ["미야", "일상"] },
    { "name": "방가방가 셉토리", "members": ["킹제육", "싹싹"] },
    { "name": "사과밭에 오렌지 났네", "members": ["냐리", "메로"] },
    { "name": "사랑의 멋짐을 모르는 당신이 불쌍해요!", "members": ["크오", "쮸삐쨔빱"] },
    { "name": "사자는 프리즘, 우리는 스트릿", "members": ["으이구", "아수"] },
    { "name": "서울 투나잇 풀버스트", "members": ["기위새"] },
    { "name": "선배, 졸업하지마세요!!", "members": ["봉태", "마망, 이브"] },
    { "name": "선배는 프리덤밖에 모르는 바보", "members": ["도란"] },
    { "name": "세미덤", "members": ["므냥"] },
    { "name": "슈뢰딩거의 프리즘", "members": ["히"] },
    { "name": "스트릿 칠드런", "members": ["시정"] },
    { "name": "스트릿조 부흥위원회", "members": ["슫파게티", "린고"] },
    { "name": "시시한 프리즘 쇼 전문", "members": ["둘기"] },
    { "name": "신장개업! 캌신타레 전문점 ~만두사오세요~", "members": ["만두", "하사오"] },
    { "name": "아빠 감사해요", "members": ["믕시"] },
    { "name": "아오모리 썬샤인 과수원", "members": ["두", "타로"] },
    { "name": "아저씨 프리즘쇼 잘하지..?", "members": ["월화", "카모", "클리"] },
    { "name": "알렉없는알렉오시부스", "members": ["캉칼프"] },
    { "name": "에델로즈경영위기대책위원회", "members": ["결"] },
    { "name": "오버레를 른으로 두기", "members": ["도미", "뫄과", "원"] },
    { "name": "오빠 왜 연하세요", "members": ["배스"] },
    { "name": "우가우가 스파이럴", "members": ["폰얼", "nyaronyaro"] },
    { "name": "울퉁불퉁하다 울퉁불퉁한", "members": ["현운"] },
    { "name": "이지두부스", "members": ["유므"] },
    { "name": "정시출발! 시간엄수! 하려고 새벽에 출발했어요", "members": ["마와비", "루빈"] },
    { "name": "중 2병 치료소", "members": ["에델로즈 청소부", "아리아"] },
    { "name": "중요한 것은 “기세”", "members": ["김도련", "루이"] },
    { "name": "진히지하는부스", "members": ["뭐든", "쑥... 쑥 버무리?"] },
    { "name": "천년전프리즘스타를아십니까", "members": ["チヰ"] },
    { "name": "카케타이거즈", "members": ["골반"] },
    { "name": "캬옹이 목욕탕", "members": ["멩", "새빛"] },
    { "name": "킹은 왼쪽에 있는 편이 아름답다.", "members": ["랸", "랸"] },
    { "name": "킹을 오른쪽으로 밀어서 잠금해제", "members": ["연시", "리나"] },
    { "name": "타.이.가.", "members": ["일홍", "분덕"] },
    { "name": "타이카즈에게 꽃다발을💐", "members": ["김쨘", "병냥"] },
    { "name": "타이카즈하자영원히", "members": ["초쵹"] },
    { "name": "틀딱삼강소", "members": ["Darf", "롱"] },
    { "name": "패왕상룡객잔", "members": ["묘파"] },
    { "name": "프리즘 마켓", "members": ["실현"] },
    { "name": "프리즘 사자들이 인간을 사랑해도 합법인가요? ", "members": ["사율"] },
    { "name": "프리즘쇼절대무리!!엣?무리가 아니었다?!", "members": ["슬기", "CMD"] },
    { "name": "프리즘스타 노동조합", "members": ["Juu"] },
    { "name": "프리즘학교 무지개학과 프리즘쇼전공 사무실 ", "members": ["김설예"] },
    { "name": "플라밍고스카이", "members": ["퓰"] },
    { "name": "하우스 오브 글로리어스 슈왈츠 (with 삼강 도련님 과거에서 기다릴게)", "members": ["도마🍅", "쫀즈"] },
    { "name": "환상의 프리즘쇼! 뭔가 보여드리겠습니다!!", "members": ["2ftt"] },
    { "name": "휘핑크림많이주세요", "members": ["호집", "🍙"] },
    { "name": "DMZ (Dear My ZONE)", "members": ["냥"] }
];

const SAMPLE_TAGS = ["굿즈", "동인지", "일러스트", "소설", "아크릴", "엽서"];
const SAMPLE_IMAGES = [
    "https://images.unsplash.com/photo-1618506557293-1eb95aaebee8?auto=format&fit=crop&q=80&w=400&h=300",
    "https://images.unsplash.com/photo-1544654921-65f5a2ba2709?auto=format&fit=crop&q=80&w=400&h=300",
    "https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&q=80&w=400&h=300",
    "https://images.unsplash.com/photo-1580130058001-52108ce4a0bc?auto=format&fit=crop&q=80&w=400&h=300",
    "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&q=80&w=400&h=300"
];

export const BOOTH_DATA: Booth[] = RAW_BOOTH_DATA.map((booth, index) => {
    const id = String(index + 1).padStart(3, '0');
    const row = String.fromCharCode(65 + Math.floor(index / 10)); // A, B, C...
    const num = (index % 10) + 1;
    const location = `${row}${num}`;
    
    const tags = [
        SAMPLE_TAGS[index % SAMPLE_TAGS.length], 
        SAMPLE_TAGS[(index + 2) % SAMPLE_TAGS.length]
    ];

    return {
        id,
        location,
        name: booth.name,
        members: booth.members.map((m, i) => ({
            nickname: m,
            twitter: i % 2 === 0 ? `twitter_${m}` : undefined
        })),
        description: `저희 [${booth.name}] 부스에 오신 것을 환영합니다!\n올해 행사에서는 특별한 아이템들과 함께 다양한 작품을 선보일 예정입니다.\n많은 관심과 사랑 부탁드립니다!`,
        tags,
        imageUrl: SAMPLE_IMAGES[index % SAMPLE_IMAGES.length]
    };
});
