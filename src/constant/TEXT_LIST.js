import { BEARISTA_IMAGE, FLOWER_IMAGE, LATTE_IMAGE } from './IMAGE_URL';

export const LANDING_TEXT_LIST = ['베어리 스타와 함께 즐기는', '나만의 AR 만들기'];

export const BUTTON_TEXT_LIST = ['바로 시작하기', '당첨 내역 확인'];

export const TEXT_LIST = ['베어리스타와 함께 춤을!', '베어리스타 댄스를 함께 추고', '챌린지에도 참여해 봐! ♬'];
export const CONTENT_LIST = ['베어리스타', '댄스 챌린지'];
export const PERIOD = '기간 : 3/14(목) ~ 4/10(수)';

export const HELPER_TEXT_LIST = ['카메라로 바닥이나 테이블을 비추면', '춤추는 베어리스타가 등장할 거야!', '챌린지도 함께 찍어보는 건 어때~?!'];

export const CODE_MODAL_TEXT_LIST = ['영수증 하단에서 발급받은', '입장 코드를 입력해 주세요.'];

export const EVENT_LIST = [
  {
    id: 0,
    theme: 'red',
    TEXT_LIST: ['카메라로 바닥이나 테이블을', '가리키면 벚꽃나무와 베어리스타가', '나타날 거야! 얼마나 귀여울까? ♡'],
    CONTENT_LIST: ['베어리스타와 함께 만나는', '블루밍 모먼트 '],
    PERIOD: '기간 : 3/14(목) ~ 4/10(수)',
  },
  {
    id: 1,
    theme: 'mint',
    TEXT_LIST: ['베어리스타와 함께 춤을!', '베어리스타 댄스를 함께 추고', '챌린지에도 참여해 봐! ♬'],
    CONTENT_LIST: ['베어리스타', '댄스 챌린지'],
    PERIOD: '기간 : 3/14(목) ~ 4/10(수)',
  },
  {
    id: 2,
    theme: 'yellow-green',
    TEXT_LIST: ['숨겨진 황금 벚꽃잎을 찾아라!', '베어리스타가 주는 행운,', '지금 찾아보자!'],
    CONTENT_LIST: ['숨겨진', '황금 벚꽃잎을 찾아라!'],
    PERIOD: '이벤트 기간 : 3/14(목) ~ 3/27(수)',
  },
];

export const TEMP_CARD = {
  id: 1,
  theme: 'mint',
  TEXT_LIST: ['베어리스타와 함께 춤을!', '베어리스타 댄스를 함께 추고', '챌린지에도 참여해 봐! ♬'],
  CONTENT_LIST: ['베어리스타', '댄스 챌린지'],
  PERIOD: '기간 : 3/14(목) ~ 4/10(수)',
};

export const EVENT_LOADING_INFO_LIST = [
  {
    id: 0,
    THEME: 'bg-red',
    ENG_TITLE: 'MEET THE BLOOMING MOMENT',
    KO_TITLE: ['베어리스타와 함께 만나는', '블루밍 모먼트'],
    IMAGE: LATTE_IMAGE,
    CONTENT: ['벚꽃이 피는 계절엔', '슈크림 라뗴와 함께!'],
  },
  {
    id: 1,
    THEME: 'bg-mint',
    ENG_TITLE: 'DANCE CHALLENGE',
    KO_TITLE: ['베어리스타', '댄스 챌린지'],
    IMAGE: BEARISTA_IMAGE,
    CONTENT: ['베어리스타 댄스', '따라할테면 따라해봐'],
  },
  {
    id: 2,
    THEME: 'bg-yellow-green',
    ENG_TITLE: 'GOLDEN BLOSSOM EVENT',
    KO_TITLE: ['숨겨진', '황금 벚꽃잎을 찾아라!'],
    IMAGE: FLOWER_IMAGE,
    CONTENT: ['떨어지는 벚꽃잎 중', '황금 벚꽃잎을 찾아 눌러보세요!'],
  },
];
