dataSetVersion = "2021-04-20"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Attributes",
    key: "attributes",
    tooltip: "Check this to restrict to certain attributes\n(All that apply\nSmall cameos will not be included)",
    checked: false,
    sub: [
			{ name: "마스터", key: "master" },
			{ name: "태초의 다이서", key: "pd" },
			{ name: "☆☆☆☆☆", key: "5s" },
			{ name: "☆☆☆☆", key: "4s" },
			{ name: "☆☆☆", key: "3s" },
			{ name: "10면", key: "d10" },
			{ name: "6면", key: "d6" },
			{ name: "4면", key: "d4" },
			{ name: "주먹", key: "me" },
			{ name: "관통", key: "pr" },
			{ name: "마법", key: "mg" },
			{ name: "저격", key: "sp" },
			{ name: "폭격", key: "bb" },
			{ name: "휠윈드", key: "ww" },
			{ name: "♀", key: "fm" },
			{ name: "♂", key: "ml" }

    ]
  },
	{
    name: "Remove Non-Limit",
    key: "nonlimit",
    tooltip: "한계초월이 존재하지 않는 다이서를 제외합니다.",
		checked: false
  },
	{
    name: "Remove Duplicate",
    key: "remake",
    tooltip: "리메이크 된 다이서의 리메이크 이전을 제외합니다.",
		checked: false
  },
	{
    name: "Remove Story Characters",
    key: "npc",
    tooltip: "다이서나 마스터로 출시되지 않은 스토리 캐릭터를 제외합니다.",
		checked: false
  }
];

dataSet[dataSetVersion].characterData = [
	// 3s
  {
    name: "니나",
    img: "WrvTUsE.png",
    opts: {
      attributes: [ "3s", "d6", "me", "fm" ],
			nonlimit: true,
			remake: true
    }
  },
  {
    name: "티피",
    img: "Tgyvcq0.png",
    opts: {
      attributes: [ "3s", "d4", "me", "fm" ],
			nonlimit: true
    }
  },
  {
    name: "루키에",
    img: "Nb4Rau7.png",
    opts: {
      attributes: [ "3s", "d4", "me", "fm" ],
			nonlimit: true
    }
  },
  {
    name: "로베",
    img: "ylb38de.png",
    opts: {
      attributes: ["3s", "d6", "pr", "fm" ],
			nonlimit: true
    }
  },
  {
    name: "돌핀",
    img: "tjKDdIp.png",
    opts: {
      attributes: [ "3s", "d4", "pr", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "레이나",
    img: "Yp54HYv.png",
    opts: {
      attributes: [ "3s", "d4", "pr", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "미코",
    img: "HPvcbt9.png",
    opts: {
      attributes: [ "3s", "d4", "ww", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "레밍",
    img: "ed3Z7Kh.png",
    opts: {
      attributes: [ "3s", "d4", "bb", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "에피라",
    img: "8iQG2Eq.png",
    opts: {
      attributes: [ "3s", "d6", "sp", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "헤일",
    img: "4GS6D3m.png",
    opts: {
      attributes: [ "3s", "d6", "mg", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "에기라",
    img: "DroBWW6.png",
    opts: {
      attributes: [ "3s", "d4", "ww", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "테슬라",
    img: "gYnDvUj.png",
    opts: {
      attributes: [ "3s", "d4", "bb", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "고르고",
    img: "0cXGl8c.png",
    opts: {
      attributes: [ "3s", "d4", "ww", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "카논",
    img: "nTaXnMA.png",
    opts: {
      attributes: [ "3s", "d4", "bb", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "제라",
    img: "eGIe9Jy.png",
    opts: {
      attributes: [ "3s", "d6", "mg", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "아우로라",
    img: "DQWaSvk.png",
    opts: {
      attributes: [ "3s", "d6", "pr", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "모라",
    img: "jYNeIpQ.png",
    opts: {
      attributes: [ "3s", "d4", "pr", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "니벨",
    img: "hjfepyt.png",
    opts: {
      attributes: [ "3s", "d4", "me", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "트리튼",
    img: "RO82aB6.png",
    opts: {
      attributes: [ "3s", "d4", "me", "ml" ],
			nonlimit: true
    }
  },
	{
    name: "카티나",
    img: "X0LRM5g.png",
    opts: {
      attributes: [ "3s", "d4", "bb", "fm" ],
			nonlimit: true,
			remake: true
    }
  },
	{
    name: "요루",
    img: "k9JeRuN.png",
    opts: {
      attributes: [ "3s", "d4", "pr", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "베샤",
    img: "q3eDUBY.png",
    opts: {
      attributes: [ "3s", "d4", "mg", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "아카",
    img: "gCTZEgP.png",
    opts: {
      attributes: [ "3s", "d6", "pr", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "밤피르",
    img: "lHUfnGV.png",
    opts: {
      attributes: [ "3s", "d6", "mg", "ml" ],
			nonlimit: true
    }
  },
	{
    name: "엘리스",
    img: "LwK6vOW.png",
    opts: {
      attributes: [ "3s", "d4", "ww", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "리리카",
    img: "vPDZnzI.png",
    opts: {
      attributes: [ "3s", "d4", "bb", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "샤렌",
    img: "9ih2hxE.png",
    opts: {
      attributes: [ "3s", "d6", "pr", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "벨라돈나",
    img: "m9Mb6Ma.png",
    opts: {
      attributes: [ "3s", "d6", "mg", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "블루쿰",
    img: "a9etZjX.png",
    opts: {
      attributes: [ "3s", "d6", "ww", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "올리비아",
    img: "kKEvOyk.png",
    opts: {
      attributes: [ "3s", "d6", "me", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "아무르",
    img: "zSO7OAN.png",
    opts: {
      attributes: [ "3s", "d4", "ww", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "엠버",
    img: "AoIPLAi.png",
    opts: {
      attributes: [ "3s", "d4", "bb", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "시오나",
    img: "MUx3S9a.png",
    opts: {
      attributes: [ "3s", "d6", "pr", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "시에나가",
    img: "e03Ch71.png",
    opts: {
      attributes: [ "3s", "d6", "mg", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "사라",
    img: "UUF3W2f.png",
    opts: {
      attributes: [ "3s", "d4", "pr", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "니케",
    img: "mhfy8Hv.png",
    opts: {
      attributes: [ "3s", "d4", "bb", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "카르멘",
    img: "fiKwmyK.png",
    opts: {
      attributes: [ "3s", "d4", "ww", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "로포포라",
    img: "ZIEs0mq.png",
    opts: {
      attributes: [ "3s", "d4", "me", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "베어",
    img: "QALnNe2.png",
    opts: {
      attributes: [ "3s", "d4", "pr", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "비비안",
    img: "IoFGgjY.png",
    opts: {
      attributes: [ "3s", "d4", "mg", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "페로트",
    img: "nqPl7Cq.png",
    opts: {
      attributes: [ "3s", "d6", "pr", "fm" ],
			nonlimit: true
    }
  },

	{
    name: "텐타이",
    img: "WkBa0As.png",
    opts: {
      attributes: [ "3s", "d6", "me", "ml" ],
			nonlimit: true
    }
  },
	{
    name: "메스",
    img: "JSUaKwE.png",
    opts: {
      attributes: [ "3s", "d4", "pr", "ml" ],
			nonlimit: true,
			remake: true
    }
  },
	{
    name: "에히메",
    img: "2pabNQk.png",
    opts: {
      attributes: [ "3s", "d4", "sp", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "베라",
    img: "YKrFehi.png",
    opts: {
      attributes: [ "3s", "d10", "bb", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "레드쿰",
    img: "tXanItH.png",
    opts: {
      attributes: [ "3s", "d10", "mg", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "라피스",
    img: "0nDclJZ.png",
    opts: {
      attributes: [ "3s", "d4", "pr", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "파우스트",
    img: "HVNoK4L.png",
    opts: {
      attributes: [ "3s", "d4", "me", "ml" ],
			nonlimit: true,
			remake: true
    }
  },
	{
    name: "무스카",
    img: "kAHkImK.png",
    opts: {
      attributes: [ "3s", "d10", "pr", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "치르치르",
    img: "wOcs2rb.png",
    opts: {
      attributes: [ "3s", "d10", "sp", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "피아",
    img: "2Cztf2s.png",
    opts: {
      attributes: [ "3s", "d10", "mg" ],
			nonlimit: true
    }
  },
	{
    name: "알비온",
    img: "XWJgx6S.png",
    opts: {
      attributes: [ "3s", "d10", "bb" ],
			nonlimit: true
    }
  },
	{
    name: "드래이그",
    img: "ZeLVpEN.png",
    opts: {
      attributes: [ "3s", "d10", "me" ],
			nonlimit: true
    }
  },
	// 4s
	{
    name: "코로네",
    img: "APHKIgG.png",
    opts: {
      attributes: [ "4s", "d4", "ww", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "스노",
    img: "NGP7e3q.png",
    opts: {
      attributes: [ "4s", "d4", "bb", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "프시케",
    img: "gwVvaDk.png",
    opts: {
      attributes: [ "4s", "d6", "sp", "fm" ],
			nonlimit: true,
	    		remake: true
    }
  },
	{
    name: "트위클",
    img: "gFuLHJ0.png",
    opts: {
      attributes: [ "4s", "d6", "mg", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "타오",
    img: "Pl8EXoJ.png",
    opts: {
      attributes: [ "4s", "d4", "sp", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "팔코",
    img: "ozyI7BZ.png",
    opts: {
      attributes: [ "4s", "d4", "me", "ml" ],
			nonlimit: true,
			remake: true
    }
  },
	{
    name: "큐비",
    img: "cInQwnt.png",
    opts: {
      attributes: [ "4s", "d4", "ww", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "포모도라",
    img: "skvzokJ.png",
    opts: {
      attributes: [ "4s", "d4", "bb", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "카두세우스",
    img: "Dfoe84M.png",
    opts: {
      attributes: [ "4s", "d6", "sp", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "카라스",
    img: "z5UNPYu.png",
    opts: {
      attributes: [ "4s", "d6", "mg", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "진달래",
    img: "Fz1cAXV.png",
    opts: {
      attributes: [ "4s", "d4", "sp", "fm" ],
			nonlimit: true,
			remake: true
    }
  },
	{
    name: "릴림",
    img: "7GbUVoG.png",
    opts: {
      attributes: [ "4s", "d4", "me", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "메이팡",
    img: "Fysc8UE.png",
    opts: {
      attributes: [ "4s", "d4", "ww", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "루시엘라",
    img: "PpXaCmy.png",
    opts: {
      attributes: [ "4s", "d4", "bb", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "마스타바",
    img: "DzOK3kp.png",
    opts: {
      attributes: [ "4s", "d4", "sp", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "미카엘라",
    img: "awa7NIS.png",
    opts: {
      attributes: [ "4s", "d4", "mg", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "아이기스",
    img: "gIsp7cT.png",
    opts: {
      attributes: [ "4s", "d6", "sp", "fm" ],
			nonlimit: true,
			remake: true
    }
  },
	{
    name: "샤인",
    img: "CJ9M9Lo.png",
    opts: {
      attributes: [ "4s", "d6", "me", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "마톤",
    img: "aGlGc3f.png",
    opts: {
      attributes: [ "4s", "d4", "ww", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "무스펠",
    img: "MDbr0j2.png",
    opts: {
      attributes: [ "4s", "d4", "bb", "ml" ],
			nonlimit: true
    }
  },
	{
    name: "히와",
    img: "Q63l3Bg.png",
    opts: {
      attributes: [ "4s", "d6", "sp", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "라바나",
    img: "r0XFsWN.png",
    opts: {
      attributes: [ "4s", "d6", "mg", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "염제",
    img: "IbWFCDO.png",
    opts: {
      attributes: [ "4s", "d6", "pr", "ml" ],
			nonlimit: true
    }
  },
	{
    name: "청우",
    img: "fjM9EcA.png",
    opts: {
      attributes: [ "4s", "d6", "me", "ml" ],
			nonlimit: true
    }
  },
	{
    name: "발렌타인",
    img: "e8HYedO.png",
    opts: {
      attributes: [ "4s", "d10", "sp", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "이저러스",
    img: "SGfw2fb.png",
    opts: {
      attributes: [ "4s", "d6", "me", "ml" ],
			nonlimit: true
    }
  },
	{
    name: "페리",
    img: "vdkhBhC.png",
    opts: {
      attributes: [ "4s", "d10", "mg", "fm" ],
			nonlimit: true
    }
  },
	{
    name: "임프",
    img: "iibAH7t.png",
    opts: {
      attributes: [ "4s", "d4", "ww", "fm" ]
    }
  },
	{
    name: "츠바키네",
    img: "VSoWngp.png",
    opts: {
      attributes: [ "4s", "d4", "bb", "fm" ]
    }
  },
		{
    name: "아리엘",
    img: "dbVcT6N.png",
    opts: {
      attributes: [ "4s", "d10", "sp", "fm" ]
    }
  },
			{
    name: "프리무라",
    img: "sfh0bcv.png",
    opts: {
      attributes: [ "4s", "d10", "mg", "fm" ]
    }
  },
			{
    name: "아테나",
    img: "rkNNQgZ.png",
    opts: {
      attributes: [ "4s", "d4", "pr", "fm" ],
	    			remake: true
    }
  },
			{
    name: "오윤",
    img: "cA9BFhb.png",
    opts: {
      attributes: [ "4s", "d4", "me", "ml" ]
    }
  },
			{
    name: "벤시",
    img: "CsbXL0Z.png",
    opts: {
      attributes: [ "4s", "d4", "ww", "fm" ]
    }
  },
			{
    name: "에드워드",
    img: "Wo7e6Ff.png",
    opts: {
      attributes: [ "4s", "d4", "bb", "ml" ]
    }
  },
			{
    name: "우리엘",
    img: "KZJBQqV.png",
    opts: {
      attributes: [ "4s", "d10", "sp", "fm" ]
    }
  },
			{
    name: "암피트리테",
    img: "YuJttY3.png",
    opts: {
      attributes: [ "4s", "d10", "mg", "fm" ]
    }
  },
			{
    name: "린",
    img: "qphV7Vt.png",
    opts: {
      attributes: [ "4s", "d4", "me", "fm" ]
    }
  },
			{
    name: "에리얼",
    img: "mHxtIpl.png",
    opts: {
      attributes: [ "4s", "d10", "ww", "fm" ]
    }
  },
			{
    name: "크림",
    img: "sMVqq6f.png",
    opts: {
      attributes: [ "4s", "d10", "bb", "fm" ]
    }
  },
			{
    name: "마델론",
    img: "eFvRpgG.png",
    opts: {
      attributes: [ "4s", "d6", "sp", "fm" ]
    }
  },
			{
    name: "잔트만",
    img: "zzFN4Mq.png",
    opts: {
      attributes: [ "4s", "d6", "mg", "fm" ]
    }
  },
			{
    name: "프록",
    img: "bCeg8my.png",
    opts: {
      attributes: [ "4s", "d6", "pr", "ml" ]
    }
  },
			{
    name: "캐트시",
    img: "7XYTMqX.png",
    opts: {
      attributes: [ "4s", "d6", "me", "fm" ]
    }
  },
			{
    name: "하후돈",
    img: "H6OwSGH.png",
    opts: {
      attributes: [ "4s", "d4", "pr", "fm" ]
    }
  },
			{
    name: "게틀링",
    img: "qIZ5VFt.png",
    opts: {
      attributes: [ "4s", "d6", "sp", "me" ]
    }
  },
			{
    name: "세이메",
    img: "66FrX9w.png",
    opts: {
      attributes: [ "4s", "d6", "ww", "fm" ]
    }
  },
			{
    name: "이치",
    img: "Am2jTR6.png",
    opts: {
      attributes: [ "4s", "d6", "mg", "fm" ]
    }
  },
			{
    name: "레너드",
    img: "5c04x0U.png",
    opts: {
      attributes: [ "4s", "d10", "ww", "ml" ]
    }
  },
			{
    name: "티나",
    img: "QkNCt8l.png",
    opts: {
      attributes: [ "4s", "d10", "bb", "fm" ]
    }
  },
				{
    name: "카렌",
    img: "fxJlFTN.png",
    opts: {
      attributes: [ "4s", "d4", "pr", "fm" ]
    }
  },
	//5s
			{
    name: "아바돈",
    img: "bhllDBv.png",
    opts: {
      attributes: [ "5s", "d10", "ww", "fm" ]
    }
  },
			{
    name: "아리오크",
    img: "q3MzR3K.png",
    opts: {
      attributes: [ "5s", "d10", "bb", "ml" ]
    }
  },
			{
    name: "오르디나",
    img: "D0X68HP.png",
    opts: {
      attributes: [ "5s", "d6", "sp", "fm" ]
    }
  },
			{
    name: "로키",
    img: "P8ikWCI.png",
    opts: {
      attributes: [ "5s", "d6", "mg", "mg" ]
    }
  },
			{
    name: "토르네",
    img: "WgnW4Wq.png",
    opts: {
      attributes: [ "5s", "d4", "pr", "fm" ]
    }
  },
			{
    name: "에스텔",
    img: "gnisXpz.png",
    opts: {
      attributes: [ "5s", "d4", "me", "fm" ]
    }
  },
			{
    name: "누트",
    img: "tMB5BXB.png",
    opts: {
      attributes: [ "5s", "d6", "ww", "fm" ]
    }
  },
			{
    name: "라크롤러",
    img: "fFFAp2g.png",
    opts: {
      attributes: [ "5s", "d6", "sp", "fm" ]
    }
  },
			{
    name: "루미",
    img: "Xhcqraj.png",
    opts: {
      attributes: [ "5s", "d4", "ww", "fm" ]
    }
  },
			{
    name: "키츠네",
    img: "EFPl6rN.png",
    opts: {
      attributes: [ "5s", "d4", "bb", "fm" ]
    }
  },
			{
    name: "니드호그",
    img: "cdvxtVY.png",
    opts: {
      attributes: [ "5s", "d10", "sp", "ml" ]
    }
  },
			{
    name: "사리엘",
    img: "EVr7Hg5.png",
    opts: {
      attributes: [ "5s", "d10", "mg", "fm" ]
    }
  },
			{
    name: "바루나",
    img: "6oXgfF7.png",
    opts: {
      attributes: [ "5s", "d4", "ww", "ml" ]
    }
  },
			{
    name: "시클",
    img: "qS39imv.png",
    opts: {
      attributes: [ "5s", "d10", "bb", "fm" ]
    }
  },
			{
    name: "다이나",
    img: "DEqpcHP.png",
    opts: {
      attributes: [ "5s", "d6", "mg", "fm" ]
    }
  },
			{
    name: "오필리아",
    img: "toqS3G2.png",
    opts: {
      attributes: [ "5s", "d6", "pr", "fm" ]
    }
  },
			{
    name: "릴리트",
    img: "FPzEMer.png",
    opts: {
      attributes: [ "5s", "d6", "me", "fm" ]
    }
  },
			{
    name: "리디",
    img: "N45av2g.png",
    opts: {
      attributes: [ "5s", "d10", "me", "fm" ]
    }
  },
			{
    name: "이블리스",
    img: "jGPAjg1.png",
    opts: {
      attributes: [ "5s", "d6", "bb", "fm" ]
    }
  },
			{
    name: "그라이프",
    img: "14nMfnZ.png",
    opts: {
      attributes: [ "5s", "d4", "pr", "ml" ]
    }
  },
			{
    name: "펜리스",
    img: "zEXRbEg.png",
    opts: {
      attributes: [ "5s", "d4", "me", "ml" ]
    }
  },
			{
    name: "비홀더",
    img: "1cZmghv.png",
    opts: {
      attributes: [ "5s", "d6", "ww", "ml" ]
    }
  },
			{
    name: "소니아",
    img: "Rbg5Ynu.png",
    opts: {
      attributes: [ "5s", "d6", "pr", "fm" ]
    }
  },
			{
    name: "엘람",
    img: "NP58kyW.png",
    opts: {
      attributes: [ "5s", "d6", "mg", "ml" ]
    }
  },
			{
    name: "잔나",
    img: "PgPetkR.png",
    opts: {
      attributes: [ "5s", "d4", "mg", "fm" ]
    }
  },
			{
    name: "하이드",
    img: "HnrKN19.png",
    opts: {
      attributes: [ "5s", "d4", "mg", "ml" ]
    }
  },
			{
    name: "마슈",
    img: "xM6Mar5.png",
    opts: {
      attributes: [ "5s", "d4", "bb", "fm" ]
    }
  },
			{
    name: "메피나",
    img: "JXVzphc.png",
    opts: {
      attributes: [ "5s", "d10", "pr", "fm" ]
    }
  },
			{
    name: "강임",
    img: "A6OocGE.png",
    opts: {
      attributes: [ "5s", "d10", "sp", "ml" ]
    }
  },
			{
    name: "오르페아나",
    img: "yCzmPE4.png",
    opts: {
      attributes: [ "5s", "d4", "mg", "fm" ]
    }
  },
			{
    name: "안나",
    img: "ra2xuek.png",
    opts: {
      attributes: [ "5s", "d10", "pr", "fm" ]
    }
  },
			{
    name: "염라",
    img: "rrQMqrO.png",
    opts: {
      attributes: [ "5s", "d6", "sp", "ml" ]
    }
  },
			{
    name: "아린",
    img: "gTTFCsC.png",
    opts: {
      attributes: [ "5s", "d10", "mg", "fm" ]
    }
  },
			{
    name: "멜리테",
    img: "zfuVW0p.png",
    opts: {
      attributes: [ "5s", "d4", "pr", "fm" ]
    }
  },
			{
    name: "로라",
    img: "knTTEix.png",
    opts: {
      attributes: [ "5s", "d10", "ww", "fm" ]
    }
  },
			{
    name: "데이나",
    img: "KsFwFrG.png",
    opts: {
      attributes: [ "5s", "d6", "bb", "fm" ]
    }
  },
			{
    name: "데일라",
    img: "AWZBTxT.png",
    opts: {
      attributes: [ "5s", "d6", "me", "ml" ]
    }
  },
			{
    name: "마리암",
    img: "qNqLC8U.png",
    opts: {
      attributes: [ "5s", "d6", "mg", "fm" ]
    }
  },
			{
    name: "세이트",
    img: "XYL4Fam.png",
    opts: {
      attributes: [ "5s", "d4", "bb", "ml" ]
    }
  },
			{
    name: "누야카",
    img: "TtY8VTA.png",
    opts: {
      attributes: [ "5s", "d10", "me", "ml" ]
    }
  },
			{
    name: "로위나",
    img: "eKUNmX8.png",
    opts: {
      attributes: [ "5s", "d10", "sp", "fm" ]
    }
  },
			{
    name: "천호",
    img: "FNrlDnQ.png",
    opts: {
      attributes: [ "5s", "d10", "ww", "fm" ]
    }
  },
			{
    name: "라크엠",
    img: "VAiAoIO.png",
    opts: {
      attributes: [ "5s", "d6", "sp", "ml" ]
    }
  },
			{
    name: "타나토스",
    img: "dUo8i8F.png",
    opts: {
      attributes: [ "5s", "d4", "mg", "ml" ]
    }
  },
			{
    name: "스미레",
    img: "kv6FK8I.png",
    opts: {
      attributes: [ "5s", "d10", "me", "fm" ]
    }
  },
			{
    name: "스피넬",
    img: "VsLncph.png",
    opts: {
      attributes: [ "5s", "d6", "bb", "fm" ]
    }
  },
			{
    name: "라스",
    img: "zhdhreX.png",
    opts: {
      attributes: [ "5s", "d4", "pr", "ml" ]
    }
  },
			{
    name: "캐롤",
    img: "K6TgFUY.png",
    opts: {
      attributes: [ "5s", "d6", "ww", "fm" ]
    }
  },
			{
    name: "블랑쉐",
    img: "uFmcBHM.png",
    opts: {
      attributes: [ "5s", "d6", "pr", "fm" ]
    }
  },
			{
    name: "란호",
    img: "5HKrJyz.png",
    opts: {
      attributes: [ "5s", "d10", "me", "ml" ]
    }
  },
			{
    name: "아누비스",
    img: "R6w6gz3.png",
    opts: {
      attributes: [ "5s", "d4", "ww", "ml" ]
    }
  },
			{
    name: "쉐샤",
    img: "kZhJHgz.png",
    opts: {
      attributes: [ "5s", "d4", "me", "ml" ]
    }
  },
			{
    name: "루시",
    img: "TKCYV3A.png",
    opts: {
      attributes: [ "5s", "d6", "bb", "fm" ]
    }
  },
			{
    name: "클로드",
    img: "SKhde9C.png",
    opts: {
      attributes: [ "5s", "d6", "sp", "ml" ]
    }
  },
			{
    name: "알라우네",
    img: "AgMQOxZ.png",
    opts: {
      attributes: [ "5s", "d4", "ww", "fm" ]
    }
  },
			{
    name: "게브",
    img: "HpGpRaO.png",
    opts: {
      attributes: [ "5s", "d4", "bb", "ml" ]
    }
  },
			{
    name: "아가일",
    img: "rnvoLoj.png",
    opts: {
      attributes: [ "5s", "d10", "sp", "fm" ]
    }
  },			{
    name: "치치",
    img: "70mH7xZ.png",
    opts: {
      attributes: [ "5s", "d6", "me", "fm" ]
    }
  },
			{
    name: "치퐁",
    img: "sUzykK3.png",
    opts: {
      attributes: [ "5s", "d4", "pr", "fm" ]
    }
  },
			{
    name: "나나",
    img: "W0LT3P9.png",
    opts: {
      attributes: [ "5s", "d10", "pr", "fm" ]
    }
  },
			{
    name: "아인",
    img: "PjJQvqG.png",
    opts: {
      attributes: [ "5s", "d4", "mg", "ml" ]
    }
  },
			{
    name: "장산범",
    img: "kUlFvvO.png",
    opts: {
      attributes: [ "5s", "d4", "me", "ml" ]
    }
  },
			{
    name: "세븐",
    img: "vI0vg1W.png",
    opts: {
      attributes: [ "5s", "d10", "bb", "fm" ]
    }
  },
			{
    name: "데레",
    img: "55XHvjj.png",
    opts: {
      attributes: [ "5s", "d10", "sp", "fm" ]
    }
  },
			{
    name: "에스더",
    img: "srzv1Ph.png",
    opts: {
      attributes: [ "5s", "d10", "me", "fm" ]
    }
  },
			{
    name: "마스",
    img: "Vu3MDcc.png",
    opts: {
      attributes: [ "5s", "d4", "mg", "fm" ]
    }
  },
			{
    name: "베타드",
    img: "TzG0ylK.png",
    opts: {
      attributes: [ "5s", "d6", "pr", "ml" ]
    }
  },
			{
    name: "메리",
    img: "aPNW656.png",
    opts: {
      attributes: [ "5s", "d10", "ww", "fm" ]
    }
  },
			{
    name: "마고",
    img: "2VtmUrE.png",
    opts: {
      attributes: [ "5s", "d6", "mg", "fm" ]
    }
  },
			{
    name: "프랑켄",
    img: "3uRQApt.png",
    opts: {
      attributes: [ "5s", "d10", "me", "ml" ]
    }
  },
			{
    name: "니아",
    img: "SL0AnYX.png",
    opts: {
      attributes: [ "5s", "d10", "ww", "fm" ]
    }
  },
			{
    name: "우사기",
    img: "FrDOVvi.png",
    opts: {
      attributes: [ "5s", "d4", "pr", "fm" ]
    }
  },
			{
    name: "안데르센",
    img: "oSYiWwZ.png",
    opts: {
      attributes: [ "5s", "d10", "sp", "ml" ]
    }
  },
			{
    name: "닉시안",
    img: "VSF1WBy.png",
    opts: {
      attributes: [ "5s", "d4", "mg", "ml" ]
    }
  },
			{
    name: "제라드",
    img: "tRIlpIq.png",
    opts: {
      attributes: [ "5s", "d4", "ww", "ml" ]
    }
  },
			{
    name: "라파엘",
    img: "mBfczBH.png",
    opts: {
      attributes: [ "5s", "d6", "ww", "fm" ]
    }
  },
			{
    name: "레세트",
    img: "ilnatUN.png",
    opts: {
      attributes: [ "5s", "d6", "mg", "fm" ]
    }
  },
			{
    name: "크로우",
    img: "SO91d5C.png",
    opts: {
      attributes: [ "5s", "d4", "sp", "ml" ]
    }
  },
			{
    name: "타라",
    img: "7Ct1yk2.png",
    opts: {
      attributes: [ "5s", "d10", "bb", "fm" ]
    }
  },
			{
    name: "전우치",
    img: "uAFLplQ.png",
    opts: {
      attributes: [ "5s", "d10", "mg", "ml" ]
    }
  },
			{
    name: "메스",
    img: "cLOSenM.png",
    opts: {
      attributes: [ "5s", "d4", "pr", "ml" ]
    }
  },
			{
    name: "쉽톤",
    img: "c6gtqvk.png",
    opts: {
      attributes: [ "5s", "d4", "ww", "fm" ]
    }
  },
			{
    name: "포세이돈",
    img: "hZe3jpQ.png",
    opts: {
      attributes: [ "5s", "d6", "bb", "ml" ]
    }
  },
			{
    name: "메흐트",
    img: "tTrAYAN.png",
    opts: {
      attributes: [ "5s", "d4", "mg", "fm" ]
    }
  },
			{
    name: "샤를로트",
    img: "A2AUFEu.png",
    opts: {
      attributes: [ "5s", "d6", "sp", "fm" ]
    }
  },
			{
    name: "팔코",
    img: "fJLDIRF.png",
    opts: {
      attributes: [ "5s", "d4", "me", "ml" ]
    }
  },
			{
    name: "마틸다",
    img: "fo8IXyv.png",
    opts: {
      attributes: [ "5s", "d6", "me", "fm" ]
    }
  },
			{
    name: "진달래",
    img: "TVTn8Op.png",
    opts: {
      attributes: [ "5s", "d4", "pr", "fm" ]
    }
  },
			{
    name: "큐피트",
    img: "cwiaQXM.png",
    opts: {
      attributes: [ "5s", "d6", "sp", "ml" ]
    }
  },
			{
    name: "카티나",
    img: "KthufMF.png",
    opts: {
      attributes: [ "5s", "d4", "bb", "fm" ]
    }
  },
			{
    name: "파우스트",
    img: "IogufUn.png",
    opts: {
      attributes: [ "5s", "d4", "me", "ml" ]
    }
  },
			{
    name: "아툼-라",
    img: "GFBkk4e.png",
    opts: {
      attributes: [ "5s", "d6", "me", "ml" ]
    }
  },
			{
    name: "베스",
    img: "5OtjjfH.png",
    opts: {
      attributes: [ "5s", "d10", "ww", "fm" ]
    }
  },
			{
    name: "아이기스",
    img: "o3Y2JfM.png",
    opts: {
      attributes: [ "5s", "d4", "ww", "fm" ]
    }
  },
			{
    name: "아레스",
    img: "8Y7EFOP.png",
    opts: {
      attributes: [ "5s", "d4", "sp", "ml" ]
    }
  },
			{
    name: "니나",
    img: "58UEJF1.png",
    opts: {
      attributes: [ "5s", "d4", "bb", "fm" ]
    }
  },
			{
    name: "아테나",
    img: "qRoku85.png",
    opts: {
      attributes: [ "5s", "d6", "mg", "fm" ]
    }
  },
				{
    name: "할로우",
    img: "1PRI7u5.png",
    opts: {
      attributes: [ "5s", "d10", "bb", "fm" ]
    }
  },
				{
    name: "오웬",
    img: "JnQofc0.png",
    opts: {
      attributes: [ "5s", "d4", "me", "ml" ]
    }
  },
					{
    name: "크리스",
    img: "zTpLf04.png",
    opts: {
      attributes: [ "5s", "d10", "pr", "fm" ]
    }
  },
						{
    name: "오베론",
    img: "fgTxjjs.png",
    opts: {
      attributes: [ "5s", "d4", "sp", "ml" ]
    }
  },
	//Primal
			{
    name: "로우리",
    img: "nvAZoQY.png",
    opts: {
      attributes: [ "pd", "d6", "me", "ml" ]
    }
  },
			{
    name: "레지나",
    img: "SgMzb8r.png",
    opts: {
      attributes: [ "pd", "d4", "sp", "fm" ]
    }
  },
			{
    name: "로저",
    img: "wT7nMXZ.png",
    opts: {
      attributes: [ "pd", "d6", "pr", "ml" ]
    }
  },
			{
    name: "칼리스",
    img: "3EfOglq.png",
    opts: {
      attributes: [ "pd", "d10", "mg", "fm" ]
    }
  },
			{
    name: "우르드",
    img: "Q17z8Z0.png",
    opts: {
      attributes: [ "pd", "d4", "me", "fm" ]
    }
  },
			{
    name: "베르단디",
    img: "9vSYuoA.png",
    opts: {
      attributes: [ "pd", "d6", "pr", "fm" ]
    }
  },
			{
    name: "카라트",
    img: "lsAlNFy.png",
    opts: {
      attributes: [ "pd", "d10", "bb", "ml" ]
    }
  },
			{
    name: "스쿨드",
    img: "UC2aYXy.png",
    opts: {
      attributes: [ "pd", "d6", "mg", "fm" ]
    }
  },
			{
    name: "아라크네",
    img: "PVKsU6q.png",
    opts: {
      attributes: [ "pd", "d4", "ww", "fm" ]
    }
  },
			{
    name: "그라마톤",
    img: "539D6eq.png",
    opts: {
      attributes: [ "pd", "d10", "ww", "ml" ]
    }
  },
			{
    name: "사마엘",
    img: "6Yau5lm.png",
    opts: {
      attributes: [ "pd", "d4", "bb", "ml" ]
    }
  },
			{
    name: "게부라",
    img: "FNKBe8t.png",
    opts: {
      attributes: [ "pd", "d6", "pr", "ml" ]
    }
  },
			{
    name: "호크마",
    img: "nOgId1r.png",
    opts: {
      attributes: [ "pd", "d10", "mg", "fm" ]
    }
  },
			{
    name: "티페레트",
    img: "SUsU6k3.png",
    opts: {
      attributes: [ "pd", "d4", "me", "ml" ]
    }
  },
			{
    name: "말쿠트",
    img: "s7fqQR2.png",
    opts: {
      attributes: [ "pd", "d10", "sp", "ml" ]
    }
  },
			{
    name: "케테르",
    img: "OLUxVlU.png",
    opts: {
      attributes: [ "pd", "d6", "bb", "fm" ]
    }
  },
			{
    name: "헤세드",
    img: "MtuUeiS.png",
    opts: {
      attributes: [ "pd", "d6", "ww", "fm" ]
    }
  },
					{
    name: "아펩",
    img: "803qWw8.png",
    opts: {
      attributes: [ "pd", "d6", "sp", "ml" ]
    }
  },
	//Story
			{
    name: "아서",
    img: "or6SbfM.png",
    opts: {
      attributes: [ "master", "ml" ]
    }
  },
			{
    name: "레이븐",
    img: "uzR8mSZ.png",
    opts: {
      attributes: [ "master", "ml" ]
    }
  },
			{
    name: "아르메리아",
    img: "wKgJGKu.png",
    opts: {
      attributes: [ "master", "fm" ]
    }
  },
			{
    name: "카린",
    img: "8bFfaYa.png",
    opts: {
      attributes: [ "fm" ],
			npc: true
    }
  },
			{
    name: "클라라",
    img: "txeJPEe.png",
    opts: {
      attributes: [ "master", "fm" ]
    }
  },
			{
    name: "필립",
    img: "OQKxMAE.png",
    opts: {
      attributes: [ "master", "ml" ]
    }
  },
			{
    name: "리비아",
    img: "zuL01x3.png",
    opts: {
      attributes: [ "fm" ],
			npc: true
    }
  },
			{
    name: "라이즈",
    img: "hWqqllo.png",
    opts: {
      attributes: [ "master", "ml" ]
    }
  },
			{
    name: "엘리엇",
    img: "vBQUpOU.png",
    opts: {
      attributes: [ "ml" ],
			npc: true
    }
  },
			{
    name: "잔느",
    img: "PjvJYRg.png",
    opts: {
      attributes: [ "master", "fm" ]
    }
  },
			{
    name: "아마란스",
    img: "dzKnqd8.png",
    opts: {
      attributes: [ "fm" ],
			npc: true
    }
  },
			{
    name: "레이첼",
    img: "RLuJBRf.png",
    opts: {
      attributes: [ "fm" ],
			npc: true
    }
  },
			{
    name: "그레일",
    img: "7DnA1GP.png",
    opts: {
      attributes: [ "fm" ],
			npc: true
    }
  },
			{
    name: "노아",
    img: "jXyOHfQ.png",
    opts: {
      attributes: [ "fm" ],
			npc: true
    }
  },
			{
    name: "미히니트",
    img: "RfpI0sM.png",
    opts: {
      attributes: [ "fm" ],
			npc: true
    }
  },
			{
    name: "유리",
    img: "k3U9kAs.png",
    opts: {
      attributes: [ "fm" ]
    }
  },
			{
    name: "아조트",
    img: "jybFKRo.png",
    opts: {
      attributes: [ "ml" ],
			npc: true
    }
  },
			{
    name: "크레이든",
    img: "dBYBPyB.png",
    opts: {
      attributes: [ "ml" ],
			npc: true
    }
  },
			{
    name: "프레이야",
    img: "bBQZmQU.png",
    opts: {
      attributes: [ "fm" ],
			npc: true
    }
  },
			{
    name: "그리드",
    img: "vmZvUtn.png",
    opts: {
      attributes: [ "ml" ],
			npc: true
    }
  },
			{
    name: "칼라디움",
    img: "B9zHpe6.png",
    opts: {
      attributes: [ "fm" ],
			npc: true
    }
  },
			{
    name: "아서스트림",
    img: "VAqMxYm.png",
    opts: {
      attributes: [ "ml" ],
			npc: true
    }
  }
]
