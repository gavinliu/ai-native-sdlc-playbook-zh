/* 第 1–14 页：封面、目录、第 1 章、第 2 章、阶段 1 规划、阶段 2 设计（开头） */
window.PAGES = window.PAGES || [];
PAGES.push(

/* ================= P1 封面 ================= */
{
  cls: 'cover', full: true, toc: '封面',
  html: `
    <div class="cover-brand">
      <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true"><path d="M12 1.6 13.9 9.3 20.9 5.1 15.9 11.4 23.6 13.3 15.9 14.9 20.9 21.2 13.9 17 12 24 10.1 17 3.1 21.2 8.1 14.9 0.4 13.3 8.1 11.4 3.1 5.1 10.1 9.3Z" fill="#D97757"/></svg>
      <span class="cb-name">Claude Code</span>
    </div>
    <div class="cover-eyebrow">技术实践手册</div>
    <h1 class="cover-title">AI 原生 SDLC<br>实践手册</h1>
    <p class="cover-sub">如何用 AI 逐阶段重塑你的软件开发生命周期。</p>
  `
},

/* ================= P2 目录 ================= */
{
  cls: 'toc-page', toc: '目录', tocSub: '本手册内容',
  footer: 'AI 原生 SDLC 实践手册',
  html: `
    <div class="toc-logo">
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M12 1.6 13.9 9.3 20.9 5.1 15.9 11.4 23.6 13.3 15.9 14.9 20.9 21.2 13.9 17 12 24 10.1 17 3.1 21.2 8.1 14.9 0.4 13.3 8.1 11.4 3.1 5.1 10.1 9.3Z" fill="#D97757"/></svg>
      <span class="toc-logo-name">Claude</span>
    </div>
    <div class="toc-eyebrow">目录</div>
    <h1>本手册内容</h1>
    <ul class="toc-entries">
      <li><span class="te-num">01</span><span><span class="te-name">代码不再是瓶颈</span><div class="te-sub">什么是 AI 原生 SDLC · 六大转变</div></span></li>
      <li><span class="te-num">02</span><span><span class="te-name">实践（Plays）</span><div class="te-sub">如何阅读一个实践 · 依赖图</div></span></li>
      <li><span class="te-num">03</span><span><span class="te-name">阶段 1 — 规划</span><div class="te-sub">以 intent.md 捕获意图</div></span></li>
      <li><span class="te-num">04</span><span><span class="te-name">阶段 2 — 设计</span><div class="te-sub">需求与设计</div></span></li>
      <li><span class="te-num">05</span><span><span class="te-name">阶段 3 — 构建</span><div class="te-sub">Plan mode · Auto mode · CLAUDE.md · Skills · Hooks · 并行会话</div></span></li>
      <li><span class="te-num">06</span><span><span class="te-name">阶段 4 — 测试</span><div class="te-sub">给 Claude 一个反馈闭环 · CI 中的持续评估</div></span></li>
      <li><span class="te-num">07</span><span><span class="te-name">阶段 5 — 部署</span><div class="te-sub">AI 进入 PR 评审闭环 · Hooks 作为审批门禁 · CI/CD</div></span></li>
      <li><span class="te-num">08</span><span><span class="te-name">阶段 6 — 维护</span><div class="te-sub">度量闭环 · 用 Claude Tag 让 Claude 随叫随到</div></span></li>
      <li><span class="te-num">09</span><span><span class="te-name">结语</span><div class="te-sub">资源与致谢</div></span></li>
    </ul>
    <p class="toc-byline">作者：Louis Claxton，Anthropic</p>
  `
},

/* ================= P3 第 1 章正文 ================= */
{
  toc: '代码不再是瓶颈', tocSub: '什么是 AI 原生 SDLC · 六大转变',
  footer: '代码不再是瓶颈',
  html: `
    <div class="eyebrow">第 01 章</div>
    <h1 class="page-title lg">代码不再是瓶颈</h1>
    <p class="lead">组织已经开始用 AI 写代码，其速度在一年前难以想象——但围绕代码的流程并没有以同样的节奏改变。</p>
    <div class="page-body">
      <p>许多工程团队仍然沿用着同样的审批关卡、评审、交接和制度，这使 Claude Code 这类代理式编码方案所带来的生产力提升陷入停滞。</p>
      <p>软件开发生命周期（SDLC）是把软件从想法带到生产的整个过程。大多数组织运行的六个阶段大同小异，覆盖规划、设计、构建、测试、部署和维护软件。传统上，每个阶段都是一个独立的环节，由不同的角色负责：产品经理撰写需求，技术架构师将其转化为设计，工程师按设计进行构建，受监管企业里的 QA 团队负责验证，发布团队负责上线，运维负责监控线上运行。工作通过文档、工单和签字确认在各阶段之间流转。</p>
      <p>传统 SDLC 流程繁重，是为了确保每一步都可问责、可控制。但它诞生于一个「编写和实现代码最耗时、最昂贵」的时代，它的设计目标是让那个时代的效率最大化——而如今情况已不再如此。PRD、估算仪式、产品安全评审，它们存在的意义是在可能长达数周、数月乃至几个季度的开发工作期间强制对齐。</p>
      <p>传统 SDLC 的管控措施还默认每一步都由人来执行。而那些产出价值最高的组织，已经围绕代理式 AI 如今能做的事重建了流程，同时确保人始终留在环路之中。在本手册中，我们整理了 Anthropic 应用 AI（Applied AI）团队的若干最佳实践——如何把 Claude 集成到 SDLC 的每个阶段，以加速开发、让流程跑得更快；这些都来自我们与客户的实际合作。</p>
    </div>
  `
},

/* ================= P4 ================= */
{
  footer: '代码不再是瓶颈',
  html: `
    <div class="page-body">
      <p>当代码不再是瓶颈、构建阶段的运行速度超出传统 SDLC 所能容纳的节奏时，三件事随之成立：</p>
      <ul>
        <li>瓶颈转移到了构建阶段左右的环节，主要是规划、评审/测试和部署——它们仍在以人的速度运转。</li>
        <li>管控与现实脱节，变得难以执行。逐行人工评审在人写代码时是合理的，但一旦大部分 diff 由代理产出，这种方式就跟不上了。</li>
        <li>治理成本上升，因为例外仍然要走每周或每月开一次的会议与委员会流程。</li>
      </ul>
    </div>
    <div class="fig">
      <div class="fig-head"><span class="fig-num">图 1</span><span class="fig-title">瓶颈发生了移动</span></div>
      <div class="fig-canvas">
        <div class="bn-row">
          <div class="bn-caption"><b>代理出现之前</b> —— 每个阶段都以人的速度运行</div>
          <div class="bn-lane">
            <span class="bn-pill">规划</span>
            <span class="bn-pill">设计</span>
            <span class="bn-pill hot">构建</span>
            <span class="bn-pill">测试</span>
            <span class="bn-pill">部署</span>
            <span class="bn-pill">维护</span>
          </div>
        </div>
        <div class="bn-row">
          <div class="bn-caption"><b>代理出现之后</b> —— 构建以代理的速度运行</div>
          <div class="bn-lane">
            <span class="bn-pill">规划</span>
            <span class="bn-pill">设计</span>
            <span class="bn-slim"></span>
            <span class="bn-pill">测试</span>
            <span class="bn-pill">部署</span>
            <span class="bn-pill">维护</span>
            <span class="bn-ghost">回收的周期时间</span>
          </div>
          <div class="bn-labels">
            <span style="width:63px">&nbsp;</span>
            <span style="width:63px">&nbsp;</span>
            <span style="width:63px">需求</span>
            <span style="width:63px">评审</span>
            <span style="width:63px">发布</span>
          </div>
        </div>
      </div>
      <p class="fig-caption">构建已不再是约束——它周围那些以人的速度运行的环节才是。以人的速度运行的阶段长度不变，而构建坍缩到只需数小时。</p>
    </div>
    <div class="page-body" style="margin-top:28px">
      <p>以安全评审瓶颈为例。安全团队的规模是按人的产出配置的，当代理让代码产出成倍增长时，要么评审队列越积越长，要么代码在评审不足的情况下上线。受监管组织两种结果都无法接受，因此其安全与制度检查必须跟上代理的节奏。</p>
      <p>要充分释放代理式 AI 的生产力提升、并保障其安全，传统 SDLC 生命周期需要经历与实现阶段同等程度的变革。</p>
    </div>
  `
},

/* ================= P5 ================= */
{
  footer: '代码不再是瓶颈',
  html: `
    <h2 class="page-title sm">什么是 AI 原生 SDLC？</h2>
    <div class="page-body">
      <p>AI 原生 SDLC 是一个被重新构想的流程：保留原有的管控目标，换用新的执行方式。流程不再是线性的，而是变成一个环，AI 嵌入在每个节点上。AI 原生 SDLC 支持自动交接、自动触发后续实践，从而化解传统 SDLC 各阶段之间手工交接、笨重低效的问题。</p>
    </div>
    <div class="fig">
      <div class="fig-head"><span class="fig-num">图 2</span><span class="fig-title">线与环</span></div>
      <div class="fig-canvas">
        <div class="loop-fig">
          <div>
            <div class="line-stack">
              <div class="line-node">规划</div>
              <div class="line-arrow">↓</div>
              <div class="line-node">设计</div>
              <div class="line-arrow">↓</div>
              <div class="line-node">构建</div>
              <div class="line-arrow">↓</div>
              <div class="line-node">测试</div>
              <div class="line-arrow">↓</div>
              <div class="line-node">部署</div>
              <div class="line-arrow">↓</div>
              <div class="line-node">维护</div>
            </div>
            <p class="loop-note"><b>传统 —— 线。</b>一次缓慢的回环，就是一轮新的发布周期。</p>
          </div>
          <div>
            <div class="loop-wrap">
              <svg viewBox="0 0 330 330" width="330" height="330" aria-hidden="true">
                <circle cx="165" cy="165" r="128" fill="none" stroke="#DDD8CC" stroke-width="1.2"/>
                <circle cx="165" cy="165" r="74" fill="#D2704B"/>
                <text x="165" y="173" text-anchor="middle" fill="#FBF3EE" font-family="Georgia, 'Noto Serif SC', serif" font-style="italic" font-size="27">Claude</text>
                <g fill="#211F1B">
                  <circle cx="165" cy="37" r="30"/>
                  <circle cx="275.5" cy="100.8" r="30"/>
                  <circle cx="275.5" cy="229.2" r="30"/>
                  <circle cx="165" cy="293" r="30"/>
                  <circle cx="54.5" cy="229.2" r="30"/>
                  <circle cx="54.5" cy="100.8" r="30"/>
                </g>
                <g fill="#F2EFE8" font-family="-apple-system, 'PingFang SC', sans-serif" font-size="12.5" text-anchor="middle">
                  <text x="165" y="42">规划</text>
                  <text x="275.5" y="105">设计</text>
                  <text x="275.5" y="233">构建</text>
                  <text x="165" y="298">测试</text>
                  <text x="54.5" y="233">部署</text>
                  <text x="54.5" y="105">维护</text>
                </g>
                <g fill="none" stroke="#D2704B" stroke-width="3" stroke-linecap="round">
                  <path d="M 196 47 A 128 128 0 0 1 244 76"/>
                  <path d="M 300 128 A 128 128 0 0 1 300 192"/>
                  <path d="M 244 254 A 128 128 0 0 1 196 283"/>
                  <path d="M 134 283 A 128 128 0 0 1 86 254"/>
                  <path d="M 30 192 A 128 128 0 0 1 30 128"/>
                  <path d="M 86 76 A 128 128 0 0 1 134 47"/>
                </g>
                <g fill="#D2704B">
                  <polygon points="243,90 254,82 241,71"/>
                  <polygon points="297,183 305,190 302,176"/>
                  <polygon points="205,271 196,280 210,279"/>
                  <polygon points="87,243 78,235 79,249"/>
                  <polygon points="33,137 25,130 28,144"/>
                  <polygon points="125,60 134,51 120,52"/>
                </g>
              </svg>
            </div>
            <p class="loop-note"><b>AI 原生 —— 环。</b>以小时计，而非以周计；人位于环之上，发起、指挥并治理。</p>
          </div>
        </div>
      </div>
    </div>
  `
},

/* ================= P6 六大转变 ================= */
{
  footer: '代码不再是瓶颈',
  html: `
    <h2 class="page-title sm">六大转变</h2>
    <div class="page-body">
      <p>下表展示了传统 SDLC 与 AI 原生 SDLC（由 Claude 支持）之间光谱的两端。大多数组织处于两列之间的某个位置。</p>
    </div>
    <div class="shift-table">
      <table>
        <thead><tr><th>阶段</th><th>传统 SDLC</th><th>AI 原生 SDLC</th></tr></thead>
        <tbody>
          <tr>
            <td class="stage">规划</td>
            <td>需求由委员会收集，经工作坊和签字确认层层提炼，最终手工撰写成文</td>
            <td>Claude 直接从源头综合痛点，并写入 <code>intent.md</code>——人类可读、机器可执行</td>
          </tr>
          <tr>
            <td class="stage">设计</td>
            <td>规格由分析师撰写，再由设计师解读转化</td>
            <td>需求与设计压缩为与代理的一次工作会话，由编码为 Skills 的标准引导，纳入 git 版本管理</td>
          </tr>
          <tr>
            <td class="stage">构建</td>
            <td>测试与代码均为手写，文档在主要开发完成后补写</td>
            <td>测试与代码由 AI 生成，组织知识以可版本化、机器可读的 <code>CLAUDE.md</code> 文件与 Skills 来维护</td>
          </tr>
          <tr>
            <td class="stage">测试</td>
            <td>在阶段边界设置 QA 关卡</td>
            <td>持续评估（evals）贯穿实现过程</td>
          </tr>
          <tr>
            <td class="stage">部署</td>
            <td>人工逐行评审代码，治理发生在评审周期中，且往往并不一致</td>
            <td>多层代理评审，人工评审只留给受监管和关键代码。治理在 AI 行动时即被执行，Hooks 充当审批门禁</td>
          </tr>
          <tr>
            <td class="stage">维护</td>
            <td>人工盯守生产环境找 bug</td>
            <td>代理监控线上部署。任何越界的控制带都会被诊断，并作为新的 <code>intent.md</code> 写回环中</td>
          </tr>
        </tbody>
      </table>
    </div>
  `
},

/* ================= P7 ================= */
{
  footer: '代码不再是瓶颈',
  html: `
    <div class="page-body">
      <p>贯穿右列的线索是「已提交的产物」。每个阶段结束时都会向版本控制写入一份产物（包括 intent.md、spec.md、plan.md、diff 及其测试、带有评审结论的 PR，以及事故记录），下一阶段则以读取它作为开始。在早期阶段，.md 文件是主要产物，因为产品负责人和代理都能阅读并基于同一份文件行动。从构建开始，产物是代码及其记录。提交链同时也是审计轨迹：谁提出了什么、代理产出了什么、谁批准了它。</p>
      <p>每一个需要判断的决策，仍然由人来负责。在代理式 SDLC 的世界里，人的注意力随需要评审的产物而转移。</p>
    </div>
    <div class="quote-card orange">
      <div class="qc-icon"><img src="assets/icon-check.svg" width="82" alt=""></div>
      <p>每个阶段都提交一份下一阶段可读的产物。意图、规格、计划、diff 与评审结论合在一起，就是完整的审计轨迹。</p>
    </div>
  `
},

/* ================= P8 第 2 章 ================= */
{
  toc: '实践（Plays）', tocSub: '如何阅读一个实践 · 依赖图',
  footer: '实践',
  html: `
    <div class="eyebrow">第 02 章</div>
    <h1 class="page-title lg">实践（Plays）</h1>
    <p class="lead">实践（play）是本手册的核心，它们被归入六个非线性阶段（规划、设计、构建、测试、部署、维护），共同覆盖完整的生命周期。</p>
    <div class="page-body">
      <p>每个实践包含：</p>
      <ul>
        <li>改变了什么；</li>
        <li>如何上手；</li>
        <li>可落地的实施步骤；</li>
        <li>治理考量；以及</li>
        <li>如何度量它是否奏效。</li>
      </ul>
      <p>这些步骤是模块化的，组织可以根据自身需要，在不同时间优先改造不同的阶段。每个实践都会在「前置条件」中列明依赖，依赖图则进一步将其可视化。</p>
      <p>阶段以提交产物而结束，这次提交同时启动下一阶段：intent.md 被接受，触发需求与设计环节；spec.md 获批，触发 plan mode；PR 合入，触发流水线；生产环境控制带越界，则写下下一份 intent.md——环就这样持续运转。</p>
    </div>
  `
},

/* ================= P9 依赖图 ================= */
{
  footer: '实践',
  html: `
    <div class="page-body">
      <p>起初，你手工给每一步下指令；终局是一个环：每一份被接受的产物都会触发下一道门禁。人的注意力集中在门禁上，评审代理标记出的内容，而不必从零开始每一个阶段。</p>
    </div>
    <div class="fig">
      <div class="fig-head"><span class="fig-num">图 3</span><span class="fig-title">实践依赖图</span></div>
      <div class="fig-canvas" style="padding:26px 22px 20px">
        <svg class="dep-svg" viewBox="0 0 1560 430">
          <!-- 列背景 -->
          <g fill="#E7E3D8">
            <rect x="10" y="28" width="200" height="356" rx="10"/>
            <rect x="272" y="28" width="200" height="356" rx="10"/>
            <rect x="534" y="28" width="200" height="356" rx="10"/>
            <rect x="796" y="28" width="200" height="356" rx="10"/>
            <rect x="1058" y="28" width="200" height="356" rx="10"/>
            <rect x="1320" y="28" width="200" height="356" rx="10"/>
          </g>
          <!-- 列标题 -->
          <g class="col-head">
            <text x="110" y="16">规划</text>
            <text x="372" y="16">设计</text>
            <text x="634" y="16">构建</text>
            <text x="896" y="16">测试</text>
            <text x="1158" y="16">部署</text>
            <text x="1420" y="16">维护</text>
          </g>
          <!-- 连接线（先画线，后画块） -->
          <g fill="none" stroke="#1C1B17" stroke-width="2.4">
            <!-- Capture intent -> Requirements & design -->
            <path d="M 110 84 C 110 44 96 40 148 40 C 200 40 360 40 372 54" stroke-linecap="round"/>
            <!-- Skills -> Requirements & design -->
            <path d="M 534 96 L 482 96"/>
            <!-- CLAUDE.md -> Skills -->
            <path d="M 634 196 L 634 152"/>
            <!-- CLAUDE.md -> Subagents -->
            <path d="M 634 244 L 634 268"/>
            <!-- CLAUDE.md -> Evals (水平跨列) -->
            <path d="M 734 210 L 786 210"/>
            <!-- CLAUDE.md -> PR review (斜向上) -->
            <path d="M 734 214 C 820 190 1000 150 1090 138"/>
            <!-- Feedback loop -> Subagents (虚线) -->
            <!-- Captured below -->
            <!-- Hooks -> CI/CD -->
            <path d="M 1158 288 L 1158 258"/>
            <!-- CI/CD -> Closing the loop -->
            <path d="M 1258 234 L 1310 234"/>
            <!-- PR review -> Closing the loop -->
            <path d="M 1210 92 C 1300 88 1390 100 1404 142"/>
            <!-- Closing the loop -> PR review -->
            <path d="M 1424 142 C 1460 100 1400 62 1352 76 C 1330 82 1290 100 1262 112" stroke-dasharray="none"/>
            <!-- Hooks -> Closing the loop -->
            <path d="M 1258 288 C 1330 288 1380 268 1408 252"/>
          </g>
          <g fill="none" stroke="#1C1B17" stroke-width="2.2" stroke-dasharray="3.5 5">
            <!-- Skills -> PR review (虚线) -->
            <path d="M 634 72 C 700 52 1000 52 1096 88"/>
            <!-- Requirements & design -> Plan mode (虚线) -->
            <path d="M 372 122 C 380 220 460 330 528 340" stroke-dasharray="3.5 5"/>
            <!-- CLAUDE.md -> Plan mode (虚线) -->
            <path d="M 534 214 C 470 230 452 300 524 340" stroke-dasharray="3.5 5"/>
            <!-- Feedback loop -> Subagents (虚线) -->
            <path d="M 796 298 L 744 298" stroke-dasharray="3.5 5"/>
          </g>
          <!-- 箭头 -->
          <g fill="#1C1B17">
            <polygon points="146,32 160,42 146,52"/>
            <polygon points="488,88 476,96 488,104"/>
            <polygon points="628,146 634,140 640,146"/>
            <polygon points="628,276 634,282 640,276"/>
            <polygon points="794,203 786,210 794,217"/>
            <polygon points="1098,131 1090,138 1096,146"/>
            <polygon points="1152,262 1158,256 1164,262"/>
            <polygon points="1318,227 1310,234 1318,241"/>
            <polygon points="1398,148 1404,142 1410,148"/>
            <polygon points="1412,250 1406,260 1398,252"/>
            <polygon points="1090,80 1104,88 1090,97"/>
            <polygon points="524,326 538,344 520,344"/>
            <polygon points="516,326 532,344 514,342"/>
            <polygon points="738,291 754,298 738,305"/>
          </g>
          <!-- 块 -->
          <g>
            <rect x="30" y="78" width="160" height="36" rx="6" fill="#D2704B"/>
            <text x="110" y="101" class="blk-t">捕获意图</text>

            <rect x="484" y="78" width="172" height="36" rx="6" fill="#211F1B"/>
            <text x="570" y="101" class="blk-t">需求与设计</text>

            <rect x="556" y="78" width="156" height="36" rx="6" fill="#211F1B"/>
            <text x="634" y="101" class="blk-t">Skills</text>

            <rect x="556" y="160" width="156" height="36" rx="6" fill="#D2704B"/>
            <text x="634" y="183" class="blk-t">CLAUDE.md</text>

            <rect x="556" y="246" width="156" height="36" rx="6" fill="#211F1B"/>
            <text x="634" y="269" class="blk-t">子代理</text>

            <rect x="556" y="322" width="156" height="36" rx="6" fill="#D2704B"/>
            <text x="634" y="345" class="blk-t">Plan mode</text>

            <rect x="820" y="192" width="180" height="36" rx="6" fill="#211F1B"/>
            <text x="910" y="215" class="blk-t">Evals</text>

            <rect x="820" y="280" width="180" height="36" rx="6" fill="#D2704B"/>
            <text x="910" y="303" class="blk-t">反馈闭环</text>

            <rect x="1096" y="80" width="176" height="36" rx="6" fill="#211F1B"/>
            <text x="1184" y="103" class="blk-t">PR review</text>

            <rect x="1096" y="216" width="176" height="36" rx="6" fill="#211F1B"/>
            <text x="1184" y="239" class="blk-t">CI/CD</text>

            <rect x="1096" y="288" width="176" height="36" rx="6" fill="#D2704B"/>
            <text x="1184" y="311" class="blk-t">Hooks</text>

            <rect x="1340" y="216" width="160" height="36" rx="6" fill="#211F1B"/>
            <text x="1420" y="239" class="blk-t">闭环</text>
          </g>
          <!-- 图例 -->
          <g>
            <rect x="446" y="404" width="18" height="12" rx="3" fill="#D2704B"/>
            <text x="474" y="414" class="legend-t">入口实践 —— 无需任何前置</text>
            <path d="M 682 410 L 716 410" stroke="#1C1B17" stroke-width="2.2"/>
            <polygon points="722,410 710,405 710,415" fill="#1C1B17"/>
            <text x="732" y="414" class="legend-t">A → B：先做 A 再做 B</text>
            <path d="M 934 410 L 968 410" stroke="#1C1B17" stroke-width="2.2" stroke-dasharray="3.5 5"/>
            <polygon points="974,410 962,405 962,415" fill="#1C1B17"/>
            <text x="984" y="414" class="legend-t">有帮助，但非必需</text>
          </g>
        </svg>
      </div>
      <p class="fig-caption">列按阶段对实践分组；箭头给出了采用的先后顺序——两者并不相同。从任何一个「起点实践」（clay play）开始：没有任何箭头指向它，因此它不需要任何前置。对于其他实践，指向它的箭头就是需要先采用的实践。</p>
    </div>
  `
},

/* ================= P10 分隔页 01 Plan ================= */
{
  cls: 'divider', dividerInner: true,
  toc: '阶段 1 — 规划', tocSub: '以 intent.md 捕获意图',
  style: '--div: var(--div-1)',
  html: `
    <div class="divider-rule"></div>
    <div class="divider-num">01</div>
    <h1 class="divider-title">规划</h1>
    <p class="divider-desc">想法不再等待别人来落笔成文。意图在第一时间以发起者自己的语言被捕获，成为下一阶段可直接行动的版本化产物。</p>
    <div class="divider-art"><img src="assets/p10-source-5.svg" width="210" alt=""></div>
  `
},

/* ================= P11 阶段 1 正文 ================= */
{
  footer: '阶段 1 · 规划',
  html: `
    <div class="eyebrow">阶段 1 · 规划</div>
    <h1 class="page-title">以 intent.md 捕获意图</h1>
    <p class="lead">启动软件开发流程的 intent.md 可以通过不同路径进入：某人有了一个想法、一张工单被提交、或由告警浮出一场事故（见阶段 6：维护）。</p>
    <div class="page-body">
      <p>当一个人有了想法，他与 Claude 一起头脑风暴，产出 markdown 格式的原型规格（proto-spec）。而在传统 SDLC 中，他还必须说服产品团队的人，与自己一起、或代替自己把想法写成文档。</p>
      <p>Claude 生成的原型规格人类可读、受版本控制，并且下一阶段可以立即使用。原型规格被保存为 intent.md。</p>
      <p>无论意图来自事件触发还是代理，流程都一样：产品负责人先评审并修正代理写出的 intent.md，然后才提交。</p>
    </div>
    <div class="compare">
      <div class="cmp-col trad">
        <div class="cmp-label">传统</div>
        <p>一个想法要经过 backlog 条目、用户故事、故事点、梳理会议，才有人能对它动手。每次交接都转移归属，传到工程团队时，已经和发起者的本意隔了好几道。</p>
      </div>
      <div class="cmp-col ai">
        <div class="cmp-label">AI 原生</div>
        <p>发起者与 Claude 头脑风暴，把结果写成 intent.md——一份用发起者自己语言表达的原型规格。产物包含要什么、为什么、受哪些约束。重复性流程通过 Skills 固化。</p>
      </div>
    </div>
  `
},

/* ================= P12 ================= */
{
  footer: '阶段 1 · 规划',
  html: `
    <div class="gs">
      <div class="gs-title">快速上手</div>
      <div class="gs-rows">
        <div class="gs-row">
          <div class="gs-k">前置条件</div>
          <div class="gs-v">无。</div>
        </div>
        <div class="gs-row">
          <div class="gs-k">基础设施</div>
          <div class="gs-v">为非工程师人员开通 Claude 访问权限（claude.ai 或 Cowork）；一份达成共识的 intent.md 模板；一个由产品负责人关注的、共享且受版本控制的意图存放处。对单一产品来说，最简单的存放处是产品仓库里的 <code>intent/</code> 文件夹——这样产物链就紧挨着由它衍生的代码。只有当意图横跨多个仓库时，才值得单独建一个 intent 仓库；在 monorepo 里它就是普通目录。<strong>阶段 3：构建</strong> 的侧栏会讨论这个存放处与已经在录的 Jira 或需求工具如何相处。</div>
        </div>
      </div>
    </div>
    <div class="page-body">
      <p>这项搭建是平台或工程团队的一次性任务。需要一位技术成员把意图存放处建起来，并决定谁可以写入——因为贡献者会来自组织各处。</p>
      <p>仓库建好之后，没有 git 经验的贡献者不必直接使用 git。借助与版本控制系统（如 GitHub）的连接器，他们可以在 claude.ai 或 Cowork 里让 Claude 代为提交 markdown 文件。</p>
    </div>
    <div class="h-section">如何执行</div>
    <div class="page-body">
      <ol>
        <li>发起者用自己的语言向 Claude 描述问题。他可以说明今天做不到什么、这个想法影响谁、更好的样子是什么、或者什么不在范围内。不需要任何正式用语。</li>
        <li>头脑风暴直到想法变得具体。Claude 会像分析师一样发问：范围、用户、约束、成功是什么样。</li>
        <li>让 Claude 按组织模板把结果写成 intent.md。模板可由技术成员做成 Skill、由负责人签字确认，内容涵盖问题、期望结果、受影响的用户与系统、约束和待决问题。</li>
        <li>发起者纠正 Claude 理解错的地方。</li>
        <li>把 intent.md 提交到共享存放处。作者和时间戳一并进入记录，产品负责人从这里接手这个想法。</li>
      </ol>
    </div>
  `
},

/* ================= P13 ================= */
{
  footer: '阶段 1 · 规划',
  html: `
    <div class="page-body"><div class="code-label">它长什么样（intent.md）</div></div>
    <pre class="code"># 意图：理赔状态自助查询
作者：J. Ortiz（理赔运营）。状态：草稿。

## 问题
客户打电话到联络中心，询问自己的理赔进展到哪一步。
坐席约三分之一的话务时间花在只查状态的问询上。

## 期望结果
客户可在门户中查看理赔状态、下一步操作和预计日期。

## 受影响的用户与系统
理赔坐席、门户团队、claims-core API。

## 约束
门户会话中不得新增 PII。仅使用现有认证方式。

## 待决问题
第三方公估人是否也需要访问权限？</pre>
    <div class="h-section">治理考量</div>
    <div class="page-body">
      <p>证据就是已提交的 intent.md：其中列明作者、时间戳和完整的修订历史，并记录在意图存放处的 git 历史里。产品负责人审批；这个把意图送入 <strong>阶段 2：设计</strong> 的接受或拒绝决策，以合并或关闭评审的形式被记录。</p>
    </div>
    <div class="h-section">如何度量</div>
    <div class="measure">
      <div class="measure-rows">
        <div class="measure-row">
          <div class="measure-k">先行指标</div>
          <div class="measure-v">从首次对话到 intent.md 被提交所需的时间，读取自意图存放处的 git 历史（其中记录作者与时间戳）。预期是从长达数周的需求获取与梳理周期，缩短到几小时。</div>
        </div>
        <div class="measure-row">
          <div class="measure-k">滞后指标</div>
          <div class="measure-v">存活率，即被产品负责人接受并进入 <strong>阶段 2：设计</strong>（而非被关闭）的 intent.md 占比。接受或拒绝以产物被合并或评审被关闭来记录。此外，还统计同一变更在首次提交 spec.md 之后，对 intent.md 所做的修改次数。</div>
        </div>
      </div>
    </div>
  `
},

/* ================= P14 分隔页 02 Design ================= */
{
  cls: 'divider', dividerInner: true,
  toc: '阶段 2 — 设计', tocSub: '需求与设计',
  style: '--div: var(--div-2)',
  html: `
    <div class="divider-rule"></div>
    <div class="divider-num">02</div>
    <h1 class="divider-title">设计</h1>
    <p class="divider-desc">需求与设计压缩进一次会话。制度在撰写规格时即被应用，而不是几周后在评审中才发现问题。</p>
    <div class="divider-art"><img src="assets/p14-source-5.svg" width="290" alt=""></div>
  `
}

);
