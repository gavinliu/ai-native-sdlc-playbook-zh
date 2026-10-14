/* 第 46–54 页：阶段 5 部署（续）· 阶段 6 维护 · 结语与参考 */
PAGES.push(

/* ================= P46 ================= */
{
  footer: '阶段 5 · 部署',
  html: `
    <div class="h-section" style="margin-top:30px">治理考量</div>
    <div class="page-body">
      <p>治理原则是：代理可以行动到生产门禁为止，但不能越过它。以下控制手段强制执行这一原则。</p>
      <ul>
        <li>分支保护让代理写出的任何东西都成为 PR，没有直达 main 的路径。</li>
        <li>生产部署 hook 阻断发布，直到具名的发布经理授权。每次非交互运行都以代理自己的身份行事，因此流水线日志能把代理所做的、与触发它的工程师所做的区分开。</li>
        <li>按环境的权限分层，决定代理在通往门禁的路上能做多少。</li>
      </ul>
    </div>
    <div class="h-section">如何度量</div>
    <div class="measure">
      <div class="measure-rows">
        <div class="measure-row">
          <div class="measure-k">先行指标</div>
          <div class="measure-v">无需呼叫人工即完成分诊的流水线故障占比（取自 CI/CD 流水线日志）。</div>
        </div>
        <div class="measure-row">
          <div class="measure-k">滞后指标</div>
          <div class="measure-v">DevOps 研究与评估（DORA）指标——CI 系统与部署工具已经在输出这些数据。</div>
        </div>
      </div>
    </div>
    <div class="quote-card green">
      <div class="qc-icon"><img src="assets/icon-lock.svg" width="92" alt=""></div>
      <p>代理可以行动到生产门禁为止，<br>但无法越过它。</p>
    </div>
  `
},

/* ================= P47 分隔页 06 Maintain ================= */
{
  cls: 'divider', dividerInner: true,
  toc: '阶段 6 — 维护', tocSub: '度量闭环 · 用 Claude Tag 让 Claude 随叫随到',
  style: '--div: var(--div-6)',
  html: `
    <div class="divider-rule"></div>
    <div class="divider-num">06</div>
    <h1 class="divider-title">维护</h1>
    <p class="divider-desc">环闭合了。触发在调用路径上没有任何人，而它所发现的东西，又以 intent.md 的形式重新进入流水线。</p>
    <div class="divider-art"><img src="assets/p47-source-5.svg" width="272" alt=""></div>
  `
},

/* ================= P48 ================= */
{
  footer: '阶段 6 · 维护',
  html: `
    <div class="eyebrow">阶段 6 · 维护</div>
    <h1 class="page-title">维护与闭环</h1>
    <p class="lead">到目前为止，我们讨论的都是如何把 Claude 加入 SDLC 流程的每个阶段——每个阶段都需要人启动最初的一步。而这个阶段的重心，转向让 Claude 自主运行、让环闭合。</p>
    <div class="page-body">
      <p>例如，一个持续运行的监控代理可以在一张 bug 工单被提出后顺势创建一份 intent.md，然后流经需求、计划、构建、测试与评审各阶段。<strong>阶段 6：维护</strong>以无头方式运行，阶段之间存在独立的信心门禁——一个确定性检查，或一个对抗式评审代理——决定上一阶段的产出是继续前进，还是升级给人。</p>
    </div>
    <div class="compare">
      <div class="cmp-col trad">
        <div class="cmp-label">传统</div>
        <p>维护是一个被动的阶段。所有工单或事故都在等人来动手、来重启流程。凌晨 3 点触发的告警可能被漏掉，工单可能在积压里一直躺着；如果新的火情先出现，事后分析的行动项可能根本进不了代码库。</p>
      </div>
      <div class="cmp-col ai">
        <div class="cmp-label">AI 原生</div>
        <p>控制带突破、工单、频道消息或定时任务之类的触发，会在无人身处调用路径的情况下唤起 Claude。Claude 诊断，只经由受门禁约束的路径行动，并把发现写成 intent.md——它随后走过前面描述的各个阶段。人来分诊和评审这些工作，而不再需要亲手启动它们。</p>
      </div>
    </div>
  `
},

/* ================= P49 ================= */
{
  footer: '阶段 6 · 维护',
  html: `
    <h1 class="page-title sm">让环闭合</h1>
    <div class="page-body">
      <p>一个确定性脚本监视生产环境，当控制带被突破时唤起 Claude。以「监测突破」作为示例，正好说明了环如何自主运转；而本阶段末尾的 Claude Tag（公开测试版）部分，则覆盖经由其他渠道抵达的工作。</p>
    </div>
    <div class="gs">
      <div class="gs-title">快速上手</div>
      <div class="gs-rows">
        <div class="gs-row"><div class="gs-k">前置条件</div><div class="gs-v">intent.md——它给环一个可重启流程的结构化输出。Claude 加速的 PR 评审、作为行动边界的 hooks，以及 CI/CD 的回滚路径（最高自主层级会调用它）。</div></div>
        <div class="gs-row"><div class="gs-k">基础设施</div><div class="gs-v">检测脚本可查询的指标存储（Prometheus、CI 系统的 API 或同类设施）、仓库的读权限、在 CI 中非交互运行 Claude Code 的方式，或用于接收 webhook 的 Agent SDK 服务。</div></div>
      </div>
    </div>
    <div class="h-section">如何执行</div>
    <div class="page-body">
      <ol>
        <li>服务负责人或平台工程师挑选一个有稳定滚动基线的指标，例如 CI 测试失败率、部署后 5xx 率或 PR 周期时间。</li>
        <li>编写检测脚本——通常是在滚动窗口上计算均值与标准差，并配以规则（Western Electric 或类似规则），让控制带既能抓住缓慢漂移，也能抓住突发尖峰。脚本纳入版本控制并做单元测试，检测保持完全确定性，不涉及任何模型。</li>
        <li>响应层级定义在版本控制的配置中（见下方 bands.yaml）。1σ 时脚本只记录日志；2σ 时以只读方式唤起 Claude 做诊断；3σ 时 Claude 可以行动——仅限于开一个进入评审门禁的 PR，或触发一份预先批准过的运行手册。</li>
      </ol>
    </div>
  `
},

/* ================= P50 ================= */
{
  footer: '阶段 6 · 维护',
  html: `
    <div class="page-body">
      <ol start="4">
        <li>触发层可以是 GitHub 或 GitLab 中的定时工作流、来自既有监控栈的 webhook，或网络内的 Cron Job。Claude 以无状态方式运行：要么作为 CI 运行器上的非交互步骤，要么作为沙箱容器中的 Agent SDK 服务；部署与模型访问选项由 CI/CD 实践覆盖。由于运行是无状态且非交互的，一个环可以在无人启动的情况下自行开始和结束。</li>
        <li>代理以<strong>阶段 1：规划</strong>的格式把诊断写成 intent.md，涵盖异常及其证据、提议的结果、受影响的系统与待决问题。此后，这项发现就像其他工作一样流经流水线。</li>
        <li>服务负责人或值班工程师分诊队列，把面向产品的发现转给产品负责人：立即修复、排期，或驳回。驳回会调校控制带，帮助减少噪音。</li>
        <li>修复上线后，为这起事故添加一个评估（持续评估实践），确保此类问题今后受到保护。</li>
      </ol>
    </div>
    <div class="page-body"><div class="code-label">它长什么样（例如，一份监控 CI 测试失败率的 bands.yaml）</div></div>
    <pre class="code">metric: ci_test_failure_rate
baseline: rolling_30d
rules: western_electric
tiers:
  1sigma: { action: log }
  2sigma: { action: diagnose,
            tools: "Read,Grep,Bash(gh run view *)" }
  3sigma: { action: propose,
            routes: [pull_request, runbook:rollback-deploy] }</pre>
    <div class="h-section">治理考量</div>
    <div class="page-body">
      <p>层级边界由版本控制的配置强制生效，权限与托管设置拒绝生产访问。调用、发现与分诊决定都带时间戳记入日志。服务负责人分诊并批准发现，由此产生的变更走常规 PR 评审门禁，代理可以触发的运行手册都已事先批准。</p>
    </div>
  `
},

/* ================= P51 ================= */
{
  footer: '阶段 6 · 维护',
  html: `
    <div class="h-section" style="margin-top:30px">如何度量</div>
    <div class="measure">
      <div class="measure-rows">
        <div class="measure-row">
          <div class="measure-k">先行指标</div>
          <div class="measure-v">从控制带突破到 intent.md 进入分诊队列的时间，对比过去从事故发生到事后分析行动的时间。检测脚本的日志里有突破时间戳与事故层级。</div>
        </div>
        <div class="measure-row">
          <div class="measure-k">滞后指标</div>
          <div class="measure-v">变成已合并修复的发现占比（分诊队列对比实际 PR 历史），以及同类事故的重复发生率——随着修复不断为评估套件补充用例，这个数字应当下降。</div>
        </div>
      </div>
    </div>
    <div class="h-section">示例</div>
    <div class="page-body">
      <ul>
        <li>当 CI 测试失败率突破 3σ，代理隔离不稳定的测试，或开一个回滚 PR——由评审门禁做决定。</li>
        <li>当部署后 5xx 率突破 3σ，且窗口内有部署，代理触发既有的回滚流水线。</li>
        <li>当 PR 周期时间触发漂移规则，代理为工程领导层写一份报告——这显示该机制对流程指标与生产指标同样有效。</li>
      </ul>
    </div>
    <div class="quote-card sand">
      <div class="qc-icon"><img src="assets/p47-source-5.svg" width="120" alt=""></div>
      <p>检测保持确定性。控制带一旦被突破才会唤起 Claude，而层级决定它可以做什么。</p>
    </div>
  `
},

/* ================= P52 ================= */
{
  footer: '阶段 6 · 维护',
  html: `
    <h1 class="page-title sm">Claude 随叫随到：Claude Tag</h1>
    <div class="page-body">
      <p>事故也可能经由其他渠道抵达，例如 Slack、Teams 这类工作场所沟通应用。事故可能表现为事故频道里一条晚上 10 点的紧急修复消息——而现在它可以被立即处理。Claude Tag（目前在 Slack 中的公开测试版）让 Claude 以自己的身份成为这些频道的成员，于是每起新事故都有第一响应人，而响应过程本身也成为环的一部分、成为未来事故的记忆。</p>
      <p>对话与机构知识留在频道里，频道中的任何人都可以引导并推进响应。任何团队成员都能实时测试假设、探索新方案、展开调查，而频道历史为可审计性添砖加瓦。通过访问 MCP，Claude 核实指标已回到基线并在讨论串中确认，把事后分析写进版本控制的 lessons 文件，供未来的调查读取。</p>
      <p>Claude Tag 接手的不只是事故。在被 @ 的工单上经由 MCP 收到请求，或在频道里被问到时，Claude 会以同样的方式分诊。小而边界清晰的修复以 PR 形式经由评审门禁抵达；更大的工作则被写成 intent.md 交给<strong>阶段 1：规划</strong>——此时，环开始自我喂养。</p>
    </div>
    <div class="fig">
      <div class="fig-head"><span class="fig-num">图 4</span><span class="fig-title">事故频道里的第一响应人</span></div>
      <div class="slack-card">
        <div class="slack-head">
          <span class="slack-chan">#inc-checkout</span>
          <span class="slack-meta">事故频道 · Claude 以自己的身份是频道成员</span>
        </div>
        <div class="slack-msg">
          <div class="slack-av rm">RM</div>
          <div class="slack-body">
            <div><span class="s-name">R. Mehta</span><span class="s-time">22:04</span></div>
            <div class="s-text">Checkout 5xx 率自 21:40 的那次部署以来持续攀升。<span class="mention">@claude</span> 来看一下？</div>
          </div>
        </div>
        <div class="slack-msg">
          <div class="slack-av claude"><svg viewBox="0 0 24 24" width="20" height="20"><path d="M12 1.6 13.9 9.3 20.9 5.1 15.9 11.4 23.6 13.3 15.9 14.9 20.9 21.2 13.9 17 12 24 10.1 17 3.1 21.2 8.1 14.9 0.4 13.3 8.1 11.4 3.1 5.1 10.1 9.3Z" fill="#fff"/></svg></div>
          <div class="slack-body">
            <div><span class="s-name">Claude</span><span class="s-time">22:07</span></div>
            <div class="s-text">在处理——正拿错误签名与部署 diff 比对。原因看起来是新缓存键丢掉了租户 id。回滚今早刚在预发演练过；要我来执行吗？</div>
          </div>
        </div>
        <div class="slack-msg">
          <div class="slack-av rm">RM</div>
          <div class="slack-body">
            <div><span class="s-name">R. Mehta</span><span class="s-time">22:08</span></div>
            <div class="s-text">执行。</div>
          </div>
        </div>
        <div class="slack-msg">
          <div class="slack-av claude"><svg viewBox="0 0 24 24" width="20" height="20"><path d="M12 1.6 13.9 9.3 20.9 5.1 15.9 11.4 23.6 13.3 15.9 14.9 20.9 21.2 13.9 17 12 24 10.1 17 3.1 21.2 8.1 14.9 0.4 13.3 8.1 11.4 3.1 5.1 10.1 9.3Z" fill="#fff"/></svg></div>
          <div class="slack-body">
            <div><span class="s-name">Claude</span><span class="s-time">22:12</span></div>
            <div class="s-text">已回滚。5xx 率已回到控制带内，事后分析已写入 <code>lessons/2026-06-checkout-cache.md</code>。</div>
          </div>
        </div>
      </div>
      <p class="fig-caption">频道就是审计轨迹：请求、诊断、人类授权与修复，全部留在事故被处理的地方。</p>
    </div>
  `
},

/* ================= P53 ================= */
{
  toc: '结语', tocSub: '资源与致谢',
  footer: '结语',
  html: `
    <div class="eyebrow">收尾</div>
    <h1 class="page-title lg">结语</h1>
    <p class="lead">模型与工具链在不断进化，让组织不仅能改造生产代码的方式，更能改造整个软件开发生命周期。</p>
    <div class="page-body">
      <p>这场变革让人的判断始终处于流程的中心，同时兼顾大型企业组织的治理与监管要求。</p>
      <p>本指南汇聚了 Anthropic 应用 AI（Applied AI）团队每天为客户践行的许多真实最佳实践，希望它对你来说是一份务实、可落地的参考。</p>
    </div>
    <div class="quote-card orange" style="position:relative;overflow:hidden;height:352px;padding:0;margin-top:44px;display:block">
      <img src="assets/icon-fingerprint.svg" width="336" style="position:absolute;right:-10px;top:-34px" alt="">
      <p style="position:absolute;left:46px;bottom:62px;max-width:320px;font-size:21px">环持续运转。<br>人的判断始终<br>位于其上。</p>
    </div>
  `
},

/* ================= P54 ================= */
{
  toc: '资源与致谢', tocSub: '官方文档清单',
  footer: '资源与致谢',
  html: `
    <div class="eyebrow">参考</div>
    <h1 class="page-title lg">资源与致谢</h1>
    <p class="lead sm">下面的文档是平台团队落实这些控制所需要的资料，大致按你实际推行的先后顺序排列。</p>
    <div class="res-grid" style="grid-auto-flow:column;grid-template-rows:repeat(8,auto)">
      <div class="res-item"><div class="res-name">为组织设置 Claude Code ——管理员决策地图；从这里开始</div><div class="res-link">code.claude.com/docs/en/admin-setup</div></div>
      <div class="res-item"><div class="res-name">设置参考与优先级，包括所有仅限托管的键</div><div class="res-link">code.claude.com/docs/en/settings</div></div>
      <div class="res-item"><div class="res-name">来自 Claude 管理控制台的服务器托管设置</div><div class="res-link">code.claude.com/docs/en/server-managed-settings</div></div>
      <div class="res-item"><div class="res-name">权限</div><div class="res-link">code.claude.com/docs/en/permissions</div></div>
      <div class="res-item"><div class="res-name">沙箱隔离 —— 操作系统级文件系统与网络隔离</div><div class="res-link">code.claude.com/docs/en/sandboxing</div></div>
      <div class="res-item"><div class="res-name">Hooks —— 指南</div><div class="res-link">code.claude.com/docs/en/hooks-guide</div></div>
      <div class="res-item"><div class="res-name">Hooks —— 参考</div><div class="res-link">code.claude.com/docs/en/hooks</div></div>
      <div class="res-item"><div class="res-name">Skills</div><div class="res-link">code.claude.com/docs/en/skills</div></div>
      <div class="res-item"><div class="res-name">插件与私有市场 —— skills 与 hooks 如何在全组织分发</div><div class="res-link">code.claude.com/docs/en/plugin-marketplaces</div></div>
      <div class="res-item"><div class="res-name">托管 MCP —— 集中管控代理的工具面</div><div class="res-link">code.claude.com/docs/en/managed-mcp</div></div>
      <div class="res-item"><div class="res-name">企业部署总览 —— Bedrock、Vertex、Foundry</div><div class="res-link">code.claude.com/docs/en/third-party-integrations</div></div>
      <div class="res-item"><div class="res-name">企业网络配置</div><div class="res-link">code.claude.com/docs/en/network-config</div></div>
      <div class="res-item"><div class="res-name">监控（OpenTelemetry）</div><div class="res-link">code.claude.com/docs/en/monitoring-usage</div></div>
      <div class="res-item"><div class="res-name">分析仪表盘</div><div class="res-link">code.claude.com/docs/en/analytics</div></div>
      <div class="res-item"><div class="res-name">合规 API —— 企业活动流、聊天检索与删除</div><div class="res-link">platform.claude.com/docs/en/manage-claude/compliance-api</div></div>
      <div class="res-item"><div class="res-name">安全模型</div><div class="res-link">code.claude.com/docs/en/security</div></div>
    </div>
    <p class="thanks">感谢 Jim Blackhurst、Will Steuk 和 Jamal Arif 对本指南的贡献——本指南受他们此前工作的启发，并建立在其中许多成果之上。</p>
  `
}

);
