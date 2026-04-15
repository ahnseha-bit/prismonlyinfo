export interface Booth {
    id: string; // 3-digit numbering
    location: string; // Booth location (e.g., A1, B4)
    name: string;
    members: { nickname: string; twitter?: string; }[];
    description: string;
    tags: string[];
    imageUrl: string;
}

export const BOOTH_DATA: Booth[] = [
    {
        id: "001",
        location: "A01",
        name: "\\\\무지개 왕 보러가야지~!//",
        members: [
            { nickname: "초과", twitter: "" },
            { nickname: "다락", twitter: "" }
        ],
        description: "무지개 왕을 만나러 오세요! 다채롭고 아름다운 무지개빛 작품들을 정성껏 준비했습니다.",
        tags: ["굿즈", "일러스트"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_001"
    },
    {
        id: "002",
        location: "A02",
        name: "2년 내에 점프할 주식 알려드립니다",
        members: [
            { nickname: "놀🍮", twitter: "" }
        ],
        description: "확신의 떡상 주식! 지금 바로 저희 부스에서 확인하시고 후회 없는 선택을 해보세요.",
        tags: ["회지", "소설"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_002"
    },
    {
        id: "003",
        location: "A03",
        name: "366타이카즈",
        members: [
            { nickname: "현밥", twitter: "" }
        ],
        description: "366일 매일매일 타이카즈와 함께! 매력적인 일상과 서사가 담긴 책들을 만나보세요.",
        tags: ["회지", "일러스트"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_003"
    },
    {
        id: "004",
        location: "A04",
        name: "3학년 프리즘반 쥬네 선생님",
        members: [
            { nickname: "흑돈", twitter: "" }
        ],
        description: "쥬네 선생님의 특별한 프리즘반으로 여러분을 초대합니다. 잊지 못할 추억이 될 작품들이 가득합니다.",
        tags: ["회지", "굿즈"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_004"
    },
    {
        id: "005",
        location: "A05",
        name: "그대의 봄날",
        members: [
            { nickname: "린예", twitter: "" }
        ],
        description: "따뜻한 그대의 봄날을 책임질 눈부신 아이템! 싱그러운 봄기운을 듬뿍 담았습니다.",
        tags: ["굿즈", "일러스트"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_005"
    },
    {
        id: "006",
        location: "A06",
        name: "금교(은교보다 2배 쎔)",
        members: [
            { nickname: "Gom", twitter: "" }
        ],
        description: "은교보다 2배 강력한 금교 부스! 압도적인 퀄리티와 파괴력을 자랑하는 작품들을 직접 확인하세요.",
        tags: ["회지", "소설"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_006"
    },
    {
        id: "007",
        location: "A07",
        name: "내 피는 녹색!",
        members: [
            { nickname: "팽이", twitter: "" }
        ],
        description: "내 피는 녹색! 열정 넘치는 초록빛 매력의 작품들로 여러분의 시선을 사로잡겠습니다.",
        tags: ["굿즈", "일러스트"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_007"
    },
    {
        id: "008",
        location: "A08",
        name: "내가 저런 챠라챠라한 녀석과 사귀다니, 무리무리! (※무리가 아니었다?!)",
        members: [
            { nickname: "재랑", twitter: "" },
            { nickname: "장강", twitter: "" }
        ],
        description: "두 사람의 좌충우돌 스토리가 담긴 달콤살벌한 회지! 절대 무리가 아니었던 그들의 이야기를 만나보세요.",
        tags: ["회지", "소설"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_008"
    },
    {
        id: "009",
        location: "A09",
        name: "니가 스트리트계의 카리스마인가 뭔가 하는 니시나카즈키냐",
        members: [
            { nickname: "김쿰", twitter: "" }
        ],
        description: "스트리트계의 카리스마를 듬뿍 담은 강렬한 역작! 직접 부스에서 그 매력을 느껴보세요.",
        tags: ["회지", "일러스트"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_009"
    },
    {
        id: "010",
        location: "A10",
        name: "돈갚아",
        members: [
            { nickname: "혜키", twitter: "" },
            { nickname: "하카", twitter: "" }
        ],
        description: "반드시 소장해야 할 퀄리티! 내 지갑을 기꺼이 털어갈 멋진 작품들이 애타게 기다립니다.",
        tags: ["굿즈", "일러스트"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_010"
    },
    {
        id: "011",
        location: "A11",
        name: "두 사람의 샹그릴라 ~숙명의 웨딩 어게인~",
        members: [
            { nickname: "로레", twitter: "" },
            { nickname: "또기", twitter: "" },
            { nickname: "덤", twitter: "" }
        ],
        description: "두 사람의 운명적인 서사를 담은 눈부신 샹그릴라. 영원한 약속이 담긴 페이지를 넘겨보세요.",
        tags: ["회지", "소설"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_011"
    },
    {
        id: "012",
        location: "A12",
        name: "메르해피한 다과회",
        members: [
            { nickname: "미야", twitter: "" },
            { nickname: "일상", twitter: "" }
        ],
        description: "초대받은 분들을 위한 메르해피한 다과회! 달콤하고 행복해지는 굿즈와 일러스트가 준비되어 있습니다.",
        tags: ["일러스트", "굿즈"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_012"
    },
    {
        id: "013",
        location: "A13",
        name: "방가방가 셉토리",
        members: [
            { nickname: "킹제육", twitter: "" },
            { nickname: "싹싹", twitter: "" }
        ],
        description: "만나서 방가방가! 귀엽고 깜찍한 셉토리 관련 아이템들이 여러분을 환하게 맞이합니다.",
        tags: ["굿즈", "일러스트"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_013"
    },
    {
        id: "014",
        location: "A14",
        name: "사과밭에 오렌지 났네",
        members: [
            { nickname: "냐리", twitter: "" },
            { nickname: "메로", twitter: "" }
        ],
        description: "상큼하고 발랄한 이색 조합! 톡톡 튀는 신선한 아이디어가 돋보이는 부스로 놀러오세요.",
        tags: ["회지", "굿즈"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_014"
    },
    {
        id: "015",
        location: "A15",
        name: "사랑의 멋짐을 모르는 당신이 불쌍해요!",
        members: [
            { nickname: "크오", twitter: "" },
            { nickname: "쮸삐쨔빱", twitter: "" }
        ],
        description: "사랑의 진정한 멋짐을 보여드립니다! 알면 알수록 헤어나올 수 없는 갓작들을 확인하세요.",
        tags: ["회지", "일러스트"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_015"
    },
    {
        id: "016",
        location: "A16",
        name: "사자는 프리즘, 우리는 스트릿",
        members: [
            { nickname: "으이구", twitter: "" },
            { nickname: "아수", twitter: "" }
        ],
        description: "프리즘처럼 반짝이고 스트릿처럼 자유로운 영혼의 조화! 매력 넘치는 창작물을 만나보세요.",
        tags: ["소설", "일러스트"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_016"
    },
    {
        id: "017",
        location: "A17",
        name: "서울 투나잇 풀버스트",
        members: [
            { nickname: "기위새", twitter: "" }
        ],
        description: "화려한 텐션의 풀버스트! 잠들지 않는 뜨거운 에너지를 꽉 채운 매력적인 작품들입니다.",
        tags: ["굿즈", "회지"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_017"
    },
    {
        id: "018",
        location: "A18",
        name: "선배, 졸업하지마세요!!",
        members: [
            { nickname: "봉태", twitter: "" },
            { nickname: "마망, 이브", twitter: "" }
        ],
        description: "선배를 향한 아쉬움과 짙은 애정을 가득 담았습니다. 눈물 없이 볼 수 없는 퀄리티의 회지들.",
        tags: ["회지", "소설"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_018"
    },
    {
        id: "019",
        location: "A19",
        name: "선배는 프리덤밖에 모르는 바보",
        members: [
            { nickname: "도란", twitter: "" }
        ],
        description: "프리덤을 외치는 직진 서사! 엉뚱하지만 사랑스러운 매력이 가득한 창작물을 준비했습니다.",
        tags: ["회지", "일러스트"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_019"
    },
    {
        id: "020",
        location: "A20",
        name: "세미덤",
        members: [
            { nickname: "므냥", twitter: "" }
        ],
        description: "퀄리티에 한 번, 분위기에 두 번 놀라는 세미덤 부스! 여러분의 심장을 훔칠 준비가 되었습니다.",
        tags: ["굿즈", "일러스트"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_020"
    },
    {
        id: "021",
        location: "A21",
        name: "슈뢰딩거의 프리즘",
        members: [
            { nickname: "히", twitter: "" }
        ],
        description: "까보기 전엔 모르는 기적같은 매력! 다채로운 가능성을 품은 특별한 회지들을 만나보세요.",
        tags: ["회지", "소설"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_021"
    },
    {
        id: "022",
        location: "A22",
        name: "스트릿 칠드런",
        members: [
            { nickname: "시정", twitter: "" }
        ],
        description: "자유로운 영혼들을 위한 감각적인 세계! 개성 만점 일러스트와 굿즈가 가득합니다.",
        tags: ["일러스트", "굿즈"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_022"
    },
    {
        id: "023",
        location: "A23",
        name: "스트릿조 부흥위원회",
        members: [
            { nickname: "슫파게티", twitter: "" },
            { nickname: "린고", twitter: "" }
        ],
        description: "스트릿조 대부흥을 위한 완벽한 라인업! 후회하지 않을 멋진 창작물들을 구비해두었습니다.",
        tags: ["회지", "일러스트"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_023"
    },
    {
        id: "024",
        location: "A24",
        name: "시시한 프리즘 쇼 전문",
        members: [
            { nickname: "둘기", twitter: "" }
        ],
        description: "절대로 시시하지 않은 진짜 쇼의 시작! 그 어디서도 볼 수 없는 독보적 매력을 뽐냅니다.",
        tags: ["회지", "소설"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_024"
    },
    {
        id: "025",
        location: "A25",
        name: "신장개업! 캌신타레 전문점 ~만두사오세요~",
        members: [
            { nickname: "만두", twitter: "" },
            { nickname: "하사오", twitter: "" }
        ],
        description: "만두처럼 속이 꽉 찬 화려한 매력! 신장개업한 캌신타레 전문점에서 알차게 모십니다.",
        tags: ["굿즈", "회지"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_025"
    },
    {
        id: "026",
        location: "A26",
        name: "아빠 감사해요",
        members: [
            { nickname: "믕시", twitter: "" }
        ],
        description: "감동과 재미를 동시에 선사하는 가슴 따뜻한 스토리. 특별한 감성을 전해드립니다.",
        tags: ["일러스트", "소설"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_026"
    },
    {
        id: "027",
        location: "A27",
        name: "아오모리 썬샤인 과수원",
        members: [
            { nickname: "두", twitter: "" },
            { nickname: "타로", twitter: "" }
        ],
        description: "싱그러운 햇살을 머금은 상큼 풋풋한 부스! 여러분의 일상에 비타민이 되어드릴 굿즈들입니다.",
        tags: ["굿즈", "일러스트"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_027"
    },
    {
        id: "028",
        location: "A28",
        name: "아저씨 프리즘쇼 잘하지..?",
        members: [
            { nickname: "월화", twitter: "" },
            { nickname: "카모", twitter: "" },
            { nickname: "클리", twitter: "" }
        ],
        description: "경륜에서 우러나오는 진짜 프리즘 매력! 모두의 마음을 훔칠 관록의 굿즈가 대기 중입니다.",
        tags: ["회지", "굿즈"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_028"
    },
    {
        id: "029",
        location: "A29",
        name: "알렉없는알렉오시부스",
        members: [
            { nickname: "캉칼프", twitter: "" }
        ],
        description: "존재감만큼은 확실한 무한 애정의 공간! 유쾌하고 사랑스러운 창작물들로 반겨드립니다.",
        tags: ["일러스트", "회지"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_029"
    },
    {
        id: "030",
        location: "A30",
        name: "에델로즈경영위기대책위원회",
        members: [
            { nickname: "결", twitter: "" }
        ],
        description: "에델로즈의 존폐를 걸고 준비한 비장의 무기들! 당장 지갑을 열게 만들 매혹적인 아이템입니다.",
        tags: ["굿즈", "회지"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_030"
    },
    {
        id: "031",
        location: "B01",
        name: "오버레를 른으로 두기",
        members: [
            { nickname: "도미", twitter: "" },
            { nickname: "뫄과", twitter: "" },
            { nickname: "원", twitter: "" }
        ],
        description: "오버레 팬들을 위한 필독서 라인업! 완벽한 서사와 그림체로 여러분을 영접합니다.",
        tags: ["소설", "회지"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_031"
    },
    {
        id: "032",
        location: "B02",
        name: "오빠 왜 연하세요",
        members: [
            { nickname: "배스", twitter: "" }
        ],
        description: "떨리는 마음을 감출 수 없는 짜릿한 매력! 연하의 치명적인 서사가 담긴 멋진 회지들.",
        tags: ["회지", "일러스트"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_032"
    },
    {
        id: "033",
        location: "B03",
        name: "우가우가 스파이럴",
        members: [
            { nickname: "폰얼", twitter: "" },
            { nickname: "nyaronyaro", twitter: "" }
        ],
        description: "헤어나올 수 없는 마성의 스파이럴! 독특한 감성과 개성 넘치는 터치의 특별한 굿즈입니다.",
        tags: ["굿즈", "일러스트"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_033"
    },
    {
        id: "034",
        location: "B04",
        name: "울퉁불퉁하다 울퉁불퉁한",
        members: [
            { nickname: "현운", twitter: "" }
        ],
        description: "볼매 스타일! 예측 불가능한 매력과 흥미진진한 스토리를 담은 작품들을 찾아주세요.",
        tags: ["회지", "소설"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_034"
    },
    {
        id: "035",
        location: "B05",
        name: "이지두부스",
        members: [
            { nickname: "유므", twitter: "" }
        ],
        description: "이지 두 댄스! 보는 순간 어깨가 들썩일 만큼 신나고 유쾌한 라인업을 즐겨보세요.",
        tags: ["굿즈", "일러스트"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_035"
    },
    {
        id: "036",
        location: "B06",
        name: "정시출발! 시간엄수! 하려고 새벽에 출발했어요",
        members: [
            { nickname: "마와비", twitter: "" },
            { nickname: "루빈", twitter: "" }
        ],
        description: "새벽 이슬 맞으며 정성껏 준비한 멋진 부스! 그 누구보다 뜨거운 열정을 증명해 보입니다.",
        tags: ["회지", "굿즈"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_036"
    },
    {
        id: "037",
        location: "B07",
        name: "중 2병 치료소",
        members: [
            { nickname: "에델로즈 청소부", twitter: "" },
            { nickname: "아리아", twitter: "" }
        ],
        description: "당신의 잠든 흑염룡을 깨워줄 혹은 잠재워줄 압도적 몰입감! 치유계이자 매혹계 부스입니다.",
        tags: ["회지", "소설"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_037"
    },
    {
        id: "038",
        location: "B08",
        name: "중요한 것은 “기세”",
        members: [
            { nickname: "김도련", twitter: "" },
            { nickname: "루이", twitter: "" }
        ],
        description: "흔들리지 않는 편안함과 압도적인 기세! 여러분의 시선을 고정시킬 최고의 역작들입니다.",
        tags: ["회지", "일러스트"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_038"
    },
    {
        id: "039",
        location: "B09",
        name: "진히지하는부스",
        members: [
            { nickname: "뭐든", twitter: "" },
            { nickname: "쑥... 쑥 버무리?", twitter: "" }
        ],
        description: "진히지 찐팬들을 위한 성지에 오신 것을 환영합니다! 케미 폭발 스토리와 아름다운 그림체.",
        tags: ["소설", "일러스트"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_039"
    },
    {
        id: "040",
        location: "B10",
        name: "천년전프리즘스타를아십니까",
        members: [
            { nickname: "チヰ", twitter: "" }
        ],
        description: "천년의 세월을 뛰어넘는 벅찬 감동! 시대를 초월한 서브컬처 예술의 진수를 보여드립니다.",
        tags: ["회지", "소설"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_040"
    },
    {
        id: "041",
        location: "B11",
        name: "카케타이거즈",
        members: [
            { nickname: "골반", twitter: "" }
        ],
        description: "파워풀한 카케타이거즈의 호랑이 기운! 지칠 줄 모르는 매력이 듬뿍 담긴 굿즈들.",
        tags: ["굿즈", "일러스트"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_041"
    },
    {
        id: "042",
        location: "B12",
        name: "캬옹이 목욕탕",
        members: [
            { nickname: "멩", twitter: "" },
            { nickname: "새빛", twitter: "" }
        ],
        description: "노곤노곤 따뜻한 힐링 코너. 귀여운 고양이들의 치명적 매력에 포근하게 빠져보세요.",
        tags: ["굿즈", "회지"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_042"
    },
    {
        id: "043",
        location: "B13",
        name: "킹은 왼쪽에 있는 편이 아름답다.",
        members: [
            { nickname: "랸", twitter: "" },
            { nickname: "랸", twitter: "" }
        ],
        description: "가장 완벽한 미학적 밸런스! 아름다움의 극치를 달리는 환상적인 작품 라인업입니다.",
        tags: ["일러스트", "소설"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_043"
    },
    {
        id: "044",
        location: "B14",
        name: "킹을 오른쪽으로 밀어서 잠금해제",
        members: [
            { nickname: "연시", twitter: "" },
            { nickname: "리나", twitter: "" }
        ],
        description: "당신의 닫힌 마음을 손쉽게 잠금 해제할 단 하나의 부스. 마법 같은 설렘을 선사합니다.",
        tags: ["회지", "일러스트"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_044"
    },
    {
        id: "045",
        location: "B15",
        name: "타.이.가.",
        members: [
            { nickname: "일홍", twitter: "" },
            { nickname: "분덕", twitter: "" }
        ],
        description: "오직 한 사람을 위한 뜨거운 찬가! 눈부신 디테일이 돋보이는 소중한 굿즈들이 모였습니다.",
        tags: ["굿즈", "회지"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_045"
    },
    {
        id: "046",
        location: "B16",
        name: "타이카즈에게 꽃다발을💐",
        members: [
            { nickname: "김쨘", twitter: "" },
            { nickname: "병냥", twitter: "" }
        ],
        description: "축복을 가득 담은 꽃다발처럼 화사하고 은은한 매력의 작품들. 두 눈을 즐겁게 해드립니다.",
        tags: ["회지", "소설"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_046"
    },
    {
        id: "047",
        location: "B17",
        name: "타이카즈하자영원히",
        members: [
            { nickname: "초쵹", twitter: "" }
        ],
        description: "영원히 변치 않을 그들의 빛나는 서사. 긴 여운을 남겨줄 감동적인 책들을 만나보세요.",
        tags: ["소설", "일러스트"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_047"
    },
    {
        id: "048",
        location: "B18",
        name: "틀딱삼강소",
        members: [
            { nickname: "Darf", twitter: "" },
            { nickname: "롱", twitter: "" }
        ],
        description: "시간이 흘러도 빛을 잃지 않는 명작의 향기. 깊고 짙은 클래식한 맛을 제대로 보여드립니다.",
        tags: ["회지", "굿즈"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_048"
    },
    {
        id: "049",
        location: "B19",
        name: "패왕상룡객잔",
        members: [
            { nickname: "묘파", twitter: "" }
        ],
        description: "객잔에 앉아 풍류를 즐기듯 유쾌하고 웅장한 매력! 눈을 뗄 수 없는 화려함을 자랑합니다.",
        tags: ["일러스트", "회지"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_049"
    },
    {
        id: "050",
        location: "B20",
        name: "프리즘 마켓",
        members: [
            { nickname: "실현", twitter: "" }
        ],
        description: "원하는 건 뭐든지 다 있는 꿈의 마켓! 둘러보는 것만으로 즐거운 매력 만점 부스입니다.",
        tags: ["굿즈", "일러스트"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_050"
    },
    {
        id: "051",
        location: "B21",
        name: "프리즘 사자들이 인간을 사랑해도 합법인가요? ",
        members: [
            { nickname: "사율", twitter: "" }
        ],
        description: "완벽하게 합법적인 치명적 두근거림! 눈을 감아도 떠오르는 아찔한 매력의 작품들입니다.",
        tags: ["소설", "회지"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_051"
    },
    {
        id: "052",
        location: "B22",
        name: "프리즘쇼절대무리!!엣?무리가 아니었다?!",
        members: [
            { nickname: "슬기", twitter: "" },
            { nickname: "CMD", twitter: "" }
        ],
        description: "모두의 예상을 짜릿하게 뒤엎는 궁극의 퀄리티. 불가능을 가능으로 바꾼 갓작을 확인하세요.",
        tags: ["회지", "일러스트"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_052"
    },
    {
        id: "053",
        location: "B23",
        name: "프리즘스타 노동조합",
        members: [
            { nickname: "Juu", twitter: "" }
        ],
        description: "열정 페이는 안 받습니다! 땀 흘려 완성한 다채로운 굿즈와 일러스트가 여러분을 기다립니다.",
        tags: ["굿즈", "일러스트"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_053"
    },
    {
        id: "054",
        location: "B24",
        name: "프리즘학교 무지개학과 프리즘쇼전공 사무실 ",
        members: [
            { nickname: "김설예", twitter: "" }
        ],
        description: "최우수 전공생들의 엘리트 포트폴리오를 대공개합니다. 교양 없이 봐도 재밌는 꿀잼 회지.",
        tags: ["회지", "소설"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_054"
    },
    {
        id: "055",
        location: "B25",
        name: "플라밍고스카이",
        members: [
            { nickname: "퓰", twitter: "" }
        ],
        description: "분홍빛 낭만으로 번져가는 하늘처럼 감미로운 부스. 마음이 따뜻해지는 작품들을 제공합니다.",
        tags: ["일러스트", "굿즈"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_055"
    },
    {
        id: "056",
        location: "B26",
        name: "하우스 오브 글로리어스 슈왈츠 (with 삼강 도련님 과거에서 기다릴게)",
        members: [
            { nickname: "도마🍅", twitter: "" },
            { nickname: "쫀즈", twitter: "" }
        ],
        description: "눈부시게 찬란한 슈왈츠 하우스의 영광! 한 땀 한 땀 장인정신이 깃든 굿즈를 모셔가세요.",
        tags: ["회지", "굿즈"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_056"
    },
    {
        id: "057",
        location: "B27",
        name: "환상의 프리즘쇼! 뭔가 보여드리겠습니다!!",
        members: [
            { nickname: "2ftt", twitter: "" }
        ],
        description: "말로 다 설명할 수 없는 전율과 감동! 오직 이 곳에서만 공개되는 환상적인 작품을 확인하세요.",
        tags: ["회지", "일러스트"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_057"
    },
    {
        id: "058",
        location: "B28",
        name: "휘핑크림많이주세요",
        members: [
            { nickname: "호집", twitter: "" },
            { nickname: "🍙", twitter: "" }
        ],
        description: "부드럽고 달콤한 크림을 산뜩하게 얹은 귀여운 굿즈들. 소소한 힐링을 원하신다면 꼭 들러주세요.",
        tags: ["굿즈", "소설"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_058"
    },
    {
        id: "059",
        location: "B29",
        name: "DMZ (Dear My ZONE)",
        members: [
            { nickname: "냥", twitter: "" }
        ],
        description: "안전하고 은밀한 나만의 덕질 공간 존! 취향을 철저히 저격하는 귀한 아이템들이 모여있습니다.",
        tags: ["일러스트", "회지"],
        imageUrl: "https://via.placeholder.com/400x300?text=Booth_059"
    }
];
