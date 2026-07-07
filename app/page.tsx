const heroApps = [
  {
    name: "PansoriGo",
    field: "국악 보컬",
    status: "출시",
    icon: "/pansorigo-app-icon-square.png",
  },
  {
    name: "VOXGO",
    field: "AI 보컬",
    status: "2026.07 출시 예정",
    icon: "/voxgo-symbol-icon-square.png",
  },
  {
    name: "GuitarGo",
    field: "기타 분석",
    status: "2026.08 출시 예정",
  },
];

const nextInstruments = ["PianoGo", "ViolinGo", "BassGo", "DrumGo", "More"];

const apps = [
  {
    name: "PansoriGo",
    icon: "/pansorigo-app-icon-square.png",
    status: "출시",
    release: "2025년 10월 출시",
    field: "AI 국악 보컬 연습",
    audience: "국악 전공생 · 입시생 · 소리 학습자",
    text: "대한민국 전통 판소리를 명창에게 도제식으로 배우듯, 명창의 음원을 따라 하며 실시간 분석으로 연습하는 앱",
    action: "자세히 보기",
    storeLinks: [
      ["App Store", "https://apps.apple.com/kr/app/pansorigo/id6749216328"],
      [
        "Google Play",
        "https://play.google.com/store/apps/details?id=com.yullab.pansorigo&hl=ko",
      ],
    ],
    tone: "violet",
  },
  {
    name: "VOXGO",
    icon: "/voxgo-symbol-icon-square.png",
    status: "2026년 7월 출시 예정",
    release: "2026년 7월 출시 예정",
    field: "AI보컬 코치",
    audience: "보컬 전공생 · 입시생 · 레슨생 · 보컬 학습자",
    text: "기준 보컬과 사용자 보컬의 차이를 분석해 표현 흐름과 개선 방향을 보여주는 앱",
    action: "출시 알림 받기",
    tone: "cyan",
  },
  {
    name: "GuitarGo",
    status: "2026년 8월 출시 예정",
    release: "2026년 8월 출시 예정",
    field: "AI기타 코치",
    audience: "기타 학습자 · 레슨생 · 자기 연습이 필요한 연주자",
    text: "기타 톤과 연주를 분석해 톤을 만드는 방향과 연주 방법을 함께 잡아가며 연습하는 앱",
    action: "준비 중",
    tone: "pink",
  },
];

const values = [
  {
    title: "기준과 나를 비교",
    text: "기준 음원과 내 연습을 나란히 보고, 어디서 어떻게 달라지는지 읽습니다.",
  },
  {
    title: "표현의 차이를 분석",
    text: "음정과 박자에 그치지 않고, 소리의 흐름과 표현 차이를 분석합니다.",
  },
  {
    title: "앱별 학습 경험으로 연결",
    text: "분석은 점수에서 끝나지 않습니다. 분야에 맞는 앱 안에서 연습과 피드백으로 이어집니다.",
  },
];

const roadmap = [
  { name: "PansoriGo", field: "국악 보컬", status: "출시", date: "2025.10", state: "released" },
  { name: "VOXGO", field: "AI 보컬", status: "곧 출시", date: "2026.07", state: "soon" },
  { name: "GuitarGo", field: "기타", status: "개발 중", date: "2026.08", state: "dev" },
  { name: "PianoGo", field: "피아노", status: "준비 중", date: "준비 중", state: "planned" },
  { name: "ViolinGo", field: "바이올린", status: "준비 중", date: "준비 중", state: "planned" },
  { name: "More", field: "확장", status: "확장 예정", date: "확장", state: "planned" },
];

const esePoints = [
  {
    title: "기준과 나를 비교하는 구조",
    text: "분야가 달라도 기준 음원과 사용자 연습을 나란히 읽는 분석 구조를 공유합니다.",
  },
  {
    title: "표현 차이를 읽는 분석 방식",
    text: "정답 체크가 아니라, 소리의 차이와 표현의 흐름을 읽는 데 집중합니다.",
  },
  {
    title: "연습과 피드백으로 이어지는 설계",
    text: "분석 결과가 곧바로 다음 연습 방향과 학습 경험으로 연결됩니다.",
  },
];

const users = [
  [
    "개인 연습자",
    "혼자 연습할 때 기준과의 차이를 확인하고, 다음 연습 방향까지 얻고 싶은 사용자",
  ],
  [
    "레슨 / 교육 현장",
    "학생 피드백, 비교 청취, 과제 관리 등 분석형 학습 도구가 필요한 선생님과 기관",
  ],
  [
    "기관 / 파트너",
    "교육 프로그램, 콘텐츠, 분석형 학습 서비스를 함께 만들거나 확장하려는 팀",
  ],
];

export default function Home() {
  return (
    <main className="site-shell">
      <nav className="top-nav" aria-label="SORI:ON navigation">
        <a className="brand" href="#top" aria-label="SORI:ON home">
          <span>SORI:ON</span>
        </a>
        <div className="nav-links">
          <a href="https://yullab.co.kr">YULLAB</a>
          <a href="#platform">플랫폼 소개</a>
          <a href="#apps">앱</a>
          <a href="#ese">ESE</a>
          <a href="#roadmap">출시 예정</a>
          <a href="#contact">문의</a>
        </div>
      </nav>

      <section id="top" className="hero section-wrap">
        <div className="hero-copy">
          <p className="eyebrow">YULLAB ESE ANALYSIS PLATFORM</p>
          <h1>
            <span>소리의 표현 분석 앱을</span>
            <strong>SORI:ON에서 연결합니다</strong>
          </h1>
          <p className="hero-lede">
            SORI:ON은 율랩의 ESE 기반 분석 앱 플랫폼입니다.
            국악, 보컬, 기타처럼 분야는 달라도,
            기준 음원과 사용자 연습을 비교하고 표현의 차이를 읽는 분석 경험을
            하나의 구조로 연결합니다.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#apps">
              앱 둘러보기
            </a>
            <a className="button secondary" href="#platform">
              플랫폼 구조 보기
            </a>
          </div>
        </div>

        <div className="hero-visual map" aria-label="SORI:ON platform map">
          <div className="platform-map">
            <div className="map-label top">현재 앱과 확장 예정 앱 구조</div>
            <div className="map-apps">
              {heroApps.map((app) => (
                <div className="map-app" key={app.name}>
                  {app.icon ? (
                    <img className="app-icon image" src={app.icon} alt={`${app.name} 앱 아이콘`} />
                  ) : (
                    <div className="app-icon">{app.name.slice(0, 2)}</div>
                  )}
                  <div>
                    <strong>{app.name}</strong>
                    <span>{app.field}</span>
                    <em>{app.status}</em>
                  </div>
                </div>
              ))}
            </div>
            <div className="next-instruments" aria-label="SORI:ON next instruments">
              <span>Next Instruments</span>
              <div>
                {nextInstruments.map((item) => (
                  <em key={item}>{item}</em>
                ))}
              </div>
            </div>
            <div className="map-hub">
              <span>SORI:ON</span>
              <strong>ESE 기반 분석 앱 허브</strong>
              <small>보컬 · 국악 · 기타 · 악기 전반으로 확장</small>
            </div>
            <div className="map-engine">
              <div className="engine-title">
                <span>ESE(Expressive Sound Engine)</span>
                <em>고도화 중</em>
              </div>
              <strong>표현 분석 엔진</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="section-wrap compact">
        <div className="section-heading">
          <p className="eyebrow">WHY SORI:ON</p>
          <h2>앱은 달라도, 분석의 기준은 같습니다</h2>
        </div>
        <div className="value-grid">
          {values.map((item) => (
            <article className="value-card" key={item.title}>
              <span className="card-line" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="apps" className="section-wrap apps-section">
        <div className="section-heading split app-heading">
          <div>
            <p className="eyebrow">CURRENT APPS</p>
            <h2>SORI:ON 앱 라인업</h2>
          </div>
          <p>
            국악, 보컬, 기타처럼 분야는 달라도 같은 ESE 분석 구조를 공유합니다.
            하나의 철학에서 출발해 분야별 연습 경험으로 확장됩니다.
          </p>
        </div>
        <div className="app-grid">
          {apps.map((app) => (
            <article className={`app-card ${app.tone}`} key={app.name}>
              <div className="app-card-top">
                <span className="status">{app.status}</span>
                <span className="field">{app.field}</span>
              </div>
              <div className="app-identity">
                {app.icon ? (
                  <img className="app-card-icon" src={app.icon} alt={`${app.name} 앱 아이콘`} />
                ) : (
                  <div className="app-card-icon fallback">{app.name.slice(0, 2)}</div>
                )}
                <div className="app-title-group">
                  <h3>{app.name}</h3>
                  <span>{app.field}</span>
                </div>
              </div>
              <p>{app.text}</p>
              <div className="app-meta">
                <span>대상: {app.audience}</span>
                <span>출시: {app.release}</span>
              </div>
              {app.storeLinks ? (
                <div className="store-links" aria-label={`${app.name} 스토어 링크`}>
                  {app.storeLinks.map(([label, href]) => (
                    <a href={href} key={label} target="_blank" rel="noreferrer">
                      {label}
                    </a>
                  ))}
                </div>
              ) : (
                <a className={app.tone === "cyan" ? "notify-link" : undefined} href="#contact" aria-label={`${app.name} ${app.action}`}>
                  {app.action}
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="roadmap" className="section-wrap compact">
        <div className="section-heading">
          <p className="eyebrow">ROADMAP</p>
          <h2>장르가 달라도, 분석의 기반은 이어집니다.</h2>
        </div>
        <div className="roadmap" aria-label="SORI:ON expansion roadmap">
          {roadmap.map((item) => (
            <div className={`roadmap-item ${item.state}`} key={item.name}>
              <span className="node" />
              <strong>{item.name}</strong>
              <span>{item.field}</span>
              <small>{item.date}</small>
              <em>{item.status}</em>
            </div>
          ))}
        </div>
      </section>

      <section id="ese" className="section-wrap platform-layer">
        <div>
          <p className="eyebrow">POWERED BY ESE</p>
          <h2>
            모든 SORI:ON 앱은
            <br />
            ESE를 공통 기반으로 작동합니다.
          </h2>
          <p>
            SORI:ON의 앱들은 분야가 달라도 같은 분석 구조를 공유합니다.
            기준과 나를 비교하고, 표현의 차이를 읽고, 다음 연습과
            피드백으로 이어지는 흐름이 하나의 기반 위에서 연결됩니다.
          </p>
          <div className="ese-actions">
            <a className="text-link" href="https://yullab.co.kr">
              율랩
            </a>
            <a className="text-link" href="mailto:team@yullab.co.kr">
              ESE 기술 문의
            </a>
          </div>
        </div>
        <div className="ese-points" aria-label="ESE common principles">
          {esePoints.map((point) => (
            <article key={point.title}>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap compact">
        <div className="section-heading">
          <p className="eyebrow">FOR USERS</p>
          <h2>SORI:ON을 활용하는 사람들</h2>
        </div>
        <div className="user-grid">
          {users.map(([title, text]) => (
            <article className="user-block" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section-wrap cta">
        <p className="eyebrow">START WITH SORI:ON</p>
        <h2>내 연습에 맞는 분석 앱을 찾아보세요.</h2>
        <div className="cta-actions">
          <a className="button primary" href="#apps">
            PansoriGo 보기
          </a>
          <a className="button secondary" href="#apps">
            VOXGO 보기
          </a>
          <a className="button secondary" href="mailto:contact@yullab.co.kr">
            문의하기
          </a>
        </div>
      </section>

      <footer className="company-footer">
        <div className="footer-brand">
          <div>
            <strong>YULLAB</strong>
            <p>소리의 표현을 이해하는 AI 기술 기업</p>
          </div>
        </div>
        <div className="footer-copy">
          <span>주식회사 율랩</span>
          <span>대표 이나영</span>
          <span>사업자번호 714-87-01958</span>
          <span>경기도 성남시</span>
          <a href="mailto:team@yullab.co.kr">team@yullab.co.kr</a>
        </div>
        <div className="footer-links">
          <a href="https://yullab.co.kr">YULLAB</a>
          <a href="#apps">SORI:ON 앱</a>
          <a href="mailto:team@yullab.co.kr">문의하기</a>
        </div>
      </footer>
    </main>
  );
}
