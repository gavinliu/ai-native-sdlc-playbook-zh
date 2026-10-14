/* 第 31–45 页：阶段 4 测试（续）· 阶段 5 部署 */
PAGES.push(

/* ================= P31 ================= */
{
  footer: '阶段 4 · 测试',
  html: `
    <div class="eyebrow">阶段 4 · 测试</div>
    <h1 class="page-title">给 Claude 一个反馈闭环</h1>
    <p class="lead">始终给 Claude 一个验证自己工作的方式——测试、构建或截图比对皆可。会话会先自查、先自我纠错，然后才交到工程师手上。</p>
    <div class="page-body">
      <p>反馈闭环不应与验证者子代理（<strong>阶段 3：构建</strong>）混为一谈。反馈闭环在任务全程反复运行，有多少工作量就跑多少次。验证者子代理则是另一种做法：当会话自认为工作已完成时，用一个全新的上下文窗口做最终检查——这样，结论就不会被产出代码时的假设所影响。</p>
    </div>
    <div class="compare">
      <div class="cmp-col trad">
        <div class="cmp-label">传统</div>
        <p>代码能工作的信号总是来得很晚。CI 要几分钟，测试人员要几天，生产环境要几周。当代码由代理产出时，迟到的信号意味着必须有人逐一检查它的全部输出，这个人就成了瓶颈。</p>
      </div>
      <div class="cmp-col ai">
        <div class="cmp-label">AI 原生</div>
        <p>会话在被人类看到之前，就拿到了检查自己工作的手段。跑测试、跑构建、截屏。Claude 反复迭代直到检查通过，所以交到工程师手上时已经通过了检查。搭建闭环是运行会话的工程师的责任，下面的步骤就是为他们写的。</p>
      </div>
    </div>
    <div class="gs">
      <div class="gs-title">快速上手</div>
      <div class="gs-rows">
        <div class="gs-row"><div class="gs-k">前置条件</div><div class="gs-v">无。</div></div>
        <div class="gs-row"><div class="gs-k">基础设施</div><div class="gs-v">一套测试和一个构建，各自一条命令即可在本地运行。对 UI 工作而言，让 Claude 看到结果至关重要——要么是浏览器工具，要么是通过 MCP 接入的截图工具。</div></div>
      </div>
    </div>
  `
},

/* ================= P32 ================= */
{
  footer: '阶段 4 · 测试',
  html: `
    <div class="h-section" style="margin-top:30px">如何执行</div>
    <div class="page-body">
      <ol>
        <li>如果今天检查工作成果需要一串命令外加一些环境知识，就把它包装成单个目标，例如 <code>make test</code> 或 <code>npm test</code>，失败时以非零状态退出。</li>
        <li>在 CLAUDE.md 的 Commands 部分列出每条命令，并给出一份健康输出的示例。</li>
        <li>设定一个可量化的目标，让 Claude 不用问你就能检查工作，例如：「test_status.py 中所有测试通过」「截图与所附的设计稿一致」，或「该端点返回 200 并带上新字段」。</li>
        <li>修复 bug 时，先写失败的测试。让 Claude 把 bug 复现为一个测试，运行它，并确认它按你预期的方式失败。提交这个测试。然后才让 Claude 在不修改测试的前提下让它通过——由最后一步的测试文件 hook 强制执行这条限制。一个在修复前就存在、而且代理无法改写的测试，就是 bug 已消失的证明。</li>
        <li>对于 UI 工作，用视觉检查闭环。给 Claude 一个浏览器或截图工具，给它设计稿，让它迭代：实现、截图、比对、调整。两三轮很正常，而且每轮结果都应更好。</li>
        <li>把验证变成「完成」的一部分。指令写在 CLAUDE.md 里：报告任务完成之前先运行测试，并展示输出。</li>
        <li>最后，闭环本身也需要保护，因为正在修代码的代理绝不能弱化针对这份代码的检查。一个在修复任务期间阻止编辑测试文件的 hook 可以做到这一点。替代方案是在评审中检查 diff，拒绝任何触及测试的改动。</li>
      </ol>
    </div>
  `
},

/* ================= P33 ================= */
{
  footer: '阶段 4 · 测试',
  html: `
    <div class="page-body"><div class="code-label">它长什么样（CLAUDE.md 验证块）</div></div>
    <pre class="code">## Verifying your work

- Build: make build（必须以 "Build succeeded" 结束）
- Test: make test（全绿；绝不跳过或删除失败的测试）
- Lint: make lint（零警告）

报告任何任务完成之前，先运行全部三项并粘贴输出。
如果测试失败，修改代码，而不是修改测试。</pre>
    <div class="h-section">治理考量</div>
    <div class="measure">
      <div class="measure-rows">
        <div class="measure-row">
          <div class="measure-k">强制什么</div>
          <div class="measure-v">任务被报告为完成之前必须先行验证；以及代理在修复期间不得编辑测试文件。两者都以 hooks 实现，供组织要求强保证时使用。</div>
        </div>
        <div class="measure-row">
          <div class="measure-k">证据是什么</div>
          <div class="measure-v">Claude 运行并粘贴的 <code>make test</code> 的实际输出、构建日志或截图比对——证据来自工具链本身。</div>
        </div>
        <div class="measure-row">
          <div class="measure-k">记录在哪里</div>
          <div class="measure-v">会话记录中；OpenTelemetry 导出会把它转发到组织的可观测性栈。PR 的 check run 里也有一份，评审人和日后的审计者都能看到。</div>
        </div>
        <div class="measure-row">
          <div class="measure-k">谁批准</div>
          <div class="measure-v">评审 PR 的代码所有者——机械性的证据已经附上，他们可以专注于意图与风险。</div>
        </div>
      </div>
    </div>
    <div class="h-section">如何度量</div>
    <div class="measure">
      <div class="measure-rows">
        <div class="measure-row">
          <div class="measure-k">先行指标</div>
          <div class="measure-v">代理所写变更的首轮 CI 通过率，CI 系统已原生支持该数据。</div>
        </div>
        <div class="measure-row">
          <div class="measure-k">滞后指标</div>
          <div class="measure-v">每个 PR 的评审耗时（取自 PR 元数据）——当测试接住了评审人过去要抓的问题，它理应下降；以及来自事故跟踪系统的变更失败率。</div>
        </div>
      </div>
    </div>
  `
},

/* ================= P34 ================= */
{
  footer: '阶段 4 · 测试',
  html: `
    <h1 class="page-title sm">CI 中的持续评估</h1>
    <div class="page-body">
      <p>评估（Evals）是 AI 原生版的阶段门禁 QA。落到实践上，就是一套在代理配置发生变化时就会运行的测试套件。当换入新模型、或重写提示词时，评估套件会告诉你代理是否仍在以同样的标准完成工作。</p>
      <p>评估应当被视为一套活的测试。随着模型变强，曾经具有区分度的用例会逐渐失效，而来自持续监控的新用例必须补进来。</p>
      <p>视用例而定，有些团队可能更愿意按固定节奏离线运行这些评估，而不是在每次变更时运行。下面的步骤针对的是持续评估。</p>
    </div>
    <div class="gs">
      <div class="gs-title">快速上手</div>
      <div class="gs-rows">
        <div class="gs-row"><div class="gs-k">前置条件</div><div class="gs-v">CLAUDE.md 与反馈闭环（<strong>阶段 4：测试</strong>）。</div></div>
        <div class="gs-row"><div class="gs-k">基础设施</div><div class="gs-v">能够在 CI 中非交互运行 Claude Code 的流水线，以及一把为评估运行预留预算的 API key。</div></div>
      </div>
    </div>
    <div class="h-section">如何执行</div>
    <div class="page-body">
      <ol>
        <li>平台工程师从近期工作中收集 20 到 50 个真实任务，连同其预期/已被接受的结果。</li>
        <li>把每个任务写成一个评估：提示词，加上界定「可接受」的检查项（测试通过、lint 干净、行为不变、政策被遵守）。</li>
        <li>套件在 CI 中非交互运行——按计划运行，并在 CLAUDE.md、skills 或 hooks 发生任何变更时运行，因为这类配置在引导代理，理应得到代码同款的回归测试。</li>
        <li>用评估结果来把关配置变更。一个使通过率下降的 skill 变更，必须先通过评审才能合并。</li>
      </ol>
    </div>
  `
},

/* ================= P35 ================= */
{
  footer: '阶段 4 · 测试',
  html: `
    <div class="page-body">
      <ol start="5">
        <li>每一次生产事故都会沉淀为一个评估，由事故归属团队编写，并永久留在套件中，作为回归测试。</li>
      </ol>
    </div>
    <div class="page-body"><div class="code-label">它长什么样（.github/workflows/agent-evals.yml）</div></div>
    <pre class="code">name: 代理评估
on:
  pull_request:
    paths: ['CLAUDE.md', '.claude/**']
  schedule:
    - cron: '0 2 * * *'
jobs:
  evals:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm install -g @anthropic-ai/claude-code
      - name: 运行评估套件
        env:
          ANTHROPIC_API_KEY: \${{ secrets.ANTHROPIC_API_KEY }}
        run: |
          for eval in evals/*.json; do
            claude -p "$(jq -r '.prompt' $eval)" \\
              --allowedTools "Read,Edit,Bash(make test)" \\
              --output-format json > result.json
            ./evals/check.sh "$eval" result.json
          done</pre>
    <div class="h-section">治理考量</div>
    <div class="page-body">
      <p>评估给了 QA 一道能跟上代理产出的门禁。通过率阈值作为合并检查强制生效；每次运行都有日志，结果可以随时间比较；配置变更由拥有它的团队批准。</p>
    </div>
    <div class="h-section">如何度量</div>
    <div class="measure">
      <div class="measure-rows">
        <div class="measure-row">
          <div class="measure-k">先行指标</div>
          <div class="measure-v">评估通过率随时间的变化（每次运行由套件报告），以及从生产事故发生到成为永久评估所需的时间。</div>
        </div>
        <div class="measure-row">
          <div class="measure-k">滞后指标</div>
          <div class="measure-v">CI 抓住的回归数量，对比逃逸到生产的回归数量（取自事故跟踪系统）。</div>
        </div>
      </div>
    </div>
  `
},

/* ================= P36 分隔页 05 Deploy ================= */
{
  cls: 'divider', dividerInner: true,
  toc: '阶段 5 — 部署', tocSub: 'AI 进入 PR 评审闭环 · Hooks 作为审批门禁 · CI/CD 集成',
  style: '--div: var(--div-5)',
  html: `
    <div class="divider-rule"></div>
    <div class="divider-num">05</div>
    <h1 class="divider-title">部署</h1>
    <p class="divider-desc">评审双向运转，治理在代理行动之处强制生效。代理做完通往生产门禁的一切，但一步也不越过它。</p>
    <div class="divider-art"><img src="assets/p36-source-5.svg" width="282" alt=""></div>
  `
},

/* ================= P37 ================= */
{
  footer: '阶段 5 · 部署',
  html: `
    <div class="eyebrow">阶段 5 · 部署</div>
    <h1 class="page-title">AI 进入 PR 评审闭环</h1>
    <p class="lead">Claude 既给出评审，也接收评审。它按组织政策评审进来的 PR，并处理自己 PR 上的评审意见。这让工程师在评审时专注于行为本身——归结起来就是判断意图与风险。</p>
    <div class="compare">
      <div class="cmp-col trad">
        <div class="cmp-label">传统</div>
        <p>评审能力是按人类产出的规模来规划的。PR 排队等着评审人通读，评审质量随评审人的负载起伏，作者在后面催，积压在增长。</p>
      </div>
      <div class="cmp-col ai">
        <div class="cmp-label">AI 原生</div>
        <p>所有 PR 都经历同一套评审检查，发现项按严重程度排序。人的注意力上移一个层级：这个变更是否实现了计划所要的？风险是否可以接受？</p>
      </div>
    </div>
    <div class="gs">
      <div class="gs-title">快速上手</div>
      <div class="gs-rows">
        <div class="gs-row"><div class="gs-k">前置条件</div><div class="gs-v">来自<strong>阶段 3：构建</strong>、更新过的 CLAUDE.md；若评审检查要落实成文政策，还需要 Skills 与定义好的子代理。</div></div>
        <div class="gs-row"><div class="gs-k">基础设施</div><div class="gs-v">已安装 Claude 集成的仓库——由管理员启用托管的 Code Review（研究预览）服务，或在你自己的 CI 中运行 claude-code-action；需要时经由 AWS Bedrock、Google Vertex 或 Microsoft Foundry 调用模型（部署选项见 CI/CD 实践）。要求代码所有者批准的分支保护策略同样值得配置。</div></div>
      </div>
    </div>
  `
},

/* ================= P38 ================= */
{
  footer: '阶段 5 · 部署',
  html: `
    <div class="h-section" style="margin-top:30px">如何执行</div>
    <div class="page-body">
      <ol>
        <li>托管的 Code Review 服务是最快的起点。管理员启用它并选择仓库。当你需要掌控流水线、或希望 API 调用经由自家云合同时，就在自己的 CI 里用 claude-code-action 运行评审（这部分管道由 CI/CD 实践覆盖）。</li>
        <li>技术负责人把评审政策写成仓库根目录的 REVIEW.md，分成组织关心的几项检查：bug 与逻辑错误；安全与漏洞；合规——对照规格（需求实践产出的 spec.md）、实施计划（plan mode 实践产出的 plan.md）与设计原则。REVIEW.md 还定义什么算「重要」、什么只是 Nit，以及哪些内容应予跳过。</li>
        <li>技术负责人设定人类阈值。发现项本身既不批准也不阻断 PR，分支保护仍然要求代码所有者批准。想用发现项把关合并的平台工程师，可以读取 check run 发布的严重度计数——一份机器可读的统计。</li>
        <li>当评审人或作者在评审意见中 @claude，Claude 会处理该意见并推送修复。PR 讨论串同时记录请求和变更。这个修复闭环通过 claude-code-action 运行；在托管服务中，评论 @claude review 则是请求一次全新评审。对于 Claude 自己开的 PR，可以更进一步，让 Claude 照看它直到合并——团队会把闭环包装成自定义 slash command：扫描 PR 上未解决的评审意见和失败的检查，逐一处理并推送修复，直到 PR 全绿、只等代码所有者批准。</li>
        <li>评审发现项会回流到 CLAUDE.md。当同一个错误被第二次标记，修正会作为那次评审的一部分写进 CLAUDE.md；由于评审会读取 CLAUDE.md，从下一个 PR 起这个错误就会被抓住。评审还会标记出变更是否让 CLAUDE.md 过时。</li>
        <li>技术负责人每月调优一次：给发现项评分，让评审人持续改进；在 REVIEW.md 中限制 Nit 的产出量。生成的路径和 CI 已强制的内容一律排除。</li>
      </ol>
    </div>
  `
},

/* ================= P39 ================= */
{
  footer: '阶段 5 · 部署',
  html: `
    <div class="page-body"><div class="code-label">它长什么样（REVIEW.md）</div></div>
    <pre class="code"># 评审指令

## 检查项
运行三项检查，并为每条发现项标注它来自哪项检查：
- Bug：逻辑错误、破损的边界情况、隐蔽的回归
- 安全：注入风险、认证缺口、日志中的 PII
- 合规：变更符合 spec.md、plan.md 与我们的设计原则

## 这里的「重要」指什么
把「重要」留给会破坏行为、泄露数据或违反政策的发现项。
风格与命名属于 Nit。

## 限制 Nit 数量
每次评审最多报告五条 Nit；其余以数量汇总。

## 不要报告
src/gen/ 下的生成文件，以及 CI 已经强制的内容。</pre>
    <div class="h-section">治理考量</div>
    <div class="page-body">
      <p>职责分离得以保留，因为写下代码的代理无法批准它。REVIEW.md 中的评审政策应用于所有 PR，发现项、修复、评分与批准都记录在 PR 历史中——PR 本身就是审计记录。批准来自人类，经由分支保护，并以发现项为依据。</p>
    </div>
    <div class="h-section">如何度量</div>
    <div class="measure">
      <div class="measure-rows">
        <div class="measure-row">
          <div class="measure-k">先行指标</div>
          <div class="measure-v">从提交到首次评审的时间——应降到分钟级；以及无需人类触碰分支即可解决的评审意见占比（数据直接存于 Git）。</div>
        </div>
        <div class="measure-row">
          <div class="measure-k">滞后指标</div>
          <div class="measure-v">合并前抓住的缺陷与漏洞，对比逃逸到生产的数量（来源：PR 历史与事故跟踪系统）。</div>
        </div>
      </div>
    </div>
  `
},

/* ================= P40 ================= */
{
  footer: '阶段 5 · 部署',
  html: `
    <h1 class="page-title sm">Hooks 作为审批门禁</h1>
    <div class="page-body">
      <p>构建阶段用 hooks 做护栏，在没有人参与的情况下允许或阻止操作（<strong>阶段 3：构建</strong>）。hook 还可以「询问」——暂停操作，直到某个具名的人批准，这正是发布门禁需要的能力。</p>
      <p>这个实践放在<strong>阶段 5：部署</strong>，因为发布门禁是最典型的场景；但 hooks 并不专属于部署：Claude 在哪里行动，它就在哪里运行。例如，hooks 可以在<strong>阶段 3：构建</strong>阻止没有变更单就修改迁移与基础设施，也可以在<strong>阶段 4：测试</strong>阻止代理在修复任务中编辑测试文件。</p>
    </div>
    <div class="gs">
      <div class="gs-title">快速上手</div>
      <div class="gs-rows">
        <div class="gs-row"><div class="gs-k">前置条件</div><div class="gs-v">无。</div></div>
        <div class="gs-row"><div class="gs-k">基础设施</div><div class="gs-v">一份书面清单，列明变更流程所要求的各项审批。</div></div>
      </div>
    </div>
    <div class="h-section">如何执行</div>
    <div class="page-body">
      <ol>
        <li>工程领导层会同变更管理与合规部门，列出必须保留的人工审批门禁，例如变更管理签核、发布授权、受保护路径的编辑。</li>
        <li>平台工程师把每个门禁表达为一个 hook——一段在 Claude 行动前运行的脚本，可以允许、询问或阻止。</li>
        <li>团队 hooks 放在 git 中的 .claude/settings.json；不可谈判的 hooks 放在平台或 IT 管理员掌管的托管设置中，个人工程师无法关闭。</li>
        <li>阻止应当自我说明：当 hook 拦下一个操作，原因和获得批准的途径要出现在 Claude 的输出中。</li>
      </ol>
    </div>
  `
},

/* ================= P41 ================= */
{
  footer: '阶段 5 · 部署',
  html: `
    <div class="page-body"><div class="code-label">它长什么样（.claude/settings.json）</div></div>
    <pre class="code">{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          { "type": "command",
            "command": "\${CLAUDE_PROJECT_DIR}/.claude/hooks/production-gate.sh" }
        ]
      }
    ]
  }
}</pre>
    <div class="page-body" style="margin-top:24px"><div class="code-label">以及门禁本身（.claude/hooks/production-gate.sh）</div></div>
    <pre class="code">#!/bin/bash
# 生产部署需要具名的发布授权
cmd=$(jq -r '.tool_input.command' < /dev/stdin)
if [[ "$cmd" == *"deploy"* && "$cmd" == *"production"* ]]; then
  if [ -z "$RELEASE_APPROVAL" ]; then
    echo "生产部署需要发布授权。" >&2
    exit 2 # exit 2 阻止该操作；消息会传给 Claude
  fi
fi
exit 0</pre>
    <div class="h-section">治理考量</div>
    <div class="page-body">
      <p>hooks 就是审批门禁。门禁条件对所有人、每一次都强制生效。允许与阻止的决定都带时间戳记入日志。门禁同时定义了什么算批准——是一张已批准的变更单，还是发布经理的签核。</p>
    </div>
  `
},

/* ================= P42 ================= */
{
  footer: '阶段 5 · 部署',
  html: `
    <div class="dark-card" style="margin-top:30px">
      <div class="dc-eyebrow">实战示例</div>
      <h2>监管企业中的托管设置</h2>
      <p class="dc-sub">由平台团队通过 MDM 或管理控制台部署；工程师无法编辑或覆盖其中任何一项。</p>
      <pre class="code dark">{
  "permissions": {
    "deny": [
      "Read(.env*)", "Read(./secrets/**)",
      "WebFetch", "Bash(curl *)", "Bash(wget *)"
    ],
    "allow": [
      "Bash(git *)", "Bash(make build)",
      "Bash(make test)", "Bash(make lint)"
    ],
    "disableBypassPermissionsMode": "disable"
  },
  "allowManagedPermissionRulesOnly": true,
  "sandbox": {
    "enabled": true,
    "failIfUnavailable": true,
    "allowUnsandboxedCommands": false,
    "network": { "allowedDomains": ["git.internal.example.com",
      "registry.npmjs.org"] },
    "credentials": {
      "files": [
        { "path": "~/.ssh", "mode": "deny" },
        { "path": "~/.aws/credentials", "mode": "deny" }
      ],
      "envVars": [ { "name": "GITHUB_TOKEN", "mode": "deny" } ]
    }
  },
  "allowManagedHooksOnly": true,
  "disableSideloadFlags": true,
  "allowManagedMcpServersOnly": true,
  "strictKnownMarketplaces": [
    { "source": "github", "repo": "example-corp/approved-plugins" }
  ],
  "requiredMinimumVersion": "2.1.193"
}</pre>
    </div>
  `
},

/* ================= P43 ================= */
{
  footer: '阶段 5 · 部署',
  html: `
    <div class="dark-card" style="margin-top:30px">
      <div class="dc-eyebrow">实战示例（续）</div>
      <div class="dc-label">每一行在控制层面换来了什么</div>
      <p><strong>permissions.deny</strong> 把机密挡在代理的上下文之外，并阻止工具发起任意网络出口；<strong>permissions.allow</strong> 预批准安全的内环操作，使拒绝清单不至于变成提示疲劳。</p>
      <p><strong>disableBypassPermissionsMode</strong> 加上 <strong>allowManagedPermissionRulesOnly</strong>，意味着没有任何工程师、项目文件或命令行开关能放宽规则。</p>
      <p><strong>sandbox</strong> 补上了权限管不到的缝隙。工具层面的 WebFetch 拒绝挡不住 shell 命令访问网络；操作系统层面的域名允许清单直接切断出口。<strong>failIfUnavailable</strong> 与 <strong>allowUnsandboxedCommands</strong> 让沙箱成为门禁：沙箱无法初始化时 Claude Code 拒绝启动，在沙箱内失败的命令也不能在沙箱外重试。</p>
      <p><strong>credentials</strong> 补上了拒绝规则留下的缺口。permissions.deny 管住的是 Claude 的文件工具，但沙箱内的 shell 命令默认仍可能读到 ~/.ssh 或 ~/.aws/credentials；这个块拒绝这些读取，并从每条沙箱化命令的环境中剥除具名机密。</p>
      <p><strong>allowManagedHooksOnly</strong> 意味着本实践中的审批门禁是唯一运行的 hooks；本地环境什么也加不进来、替换不掉。</p>
      <p><strong>disableSideloadFlags</strong> 与 <strong>strictKnownMarketplaces</strong> 意味着工程师机器上的每个 skill、代理、hook 和 MCP 服务器，都经由组织批准的插件市场而来，绝不来自家目录。</p>
      <p><strong>allowManagedMcpServersOnly</strong> 让代理的工具面成为一份由平台团队掌控的允许清单。</p>
      <p><strong>requiredMinimumVersion</strong> 在版本低于批准的底线时拒绝启动，因此这些控制是由组织真正评估过的构建来执行的。</p>
      <p>把以上内容当作量身定制的起点，而不是照抄的建议。每一条 deny 都在与能力做交易，合适的平衡取决于仓库的数据分级。设置参考文档记录了每一个键，包括仅限托管的那些：code.claude.com/docs/en/settings</p>
    </div>
  `
},

/* ================= P44 ================= */
{
  footer: '阶段 5 · 部署',
  html: `
    <div class="h-section" style="margin-top:30px">如何度量（针对 hooks 本身）</div>
    <div class="measure">
      <div class="measure-rows">
        <div class="measure-row">
          <div class="measure-k">先行指标</div>
          <div class="measure-v">在每个审批门禁上等待的时间。每个 hook 决定都会带着时间戳与允许/阻止的结论写入 OpenTelemetry 导出，因此每个门禁的等待都清晰可见。</div>
        </div>
        <div class="measure-row">
          <div class="measure-k">滞后指标</div>
          <div class="measure-v">引入 hooks 前后，到达生产环境的门禁违规数量（取自事故跟踪系统）。</div>
        </div>
      </div>
    </div>
    <hr style="border:none;border-top:1px solid var(--ink);margin:32px 0 28px">
    <h1 class="page-title sm">CI/CD 集成与部署</h1>
    <p class="lead sm">在 CI/CD 流水线中以非交互方式运行 Claude Code，对执行做沙箱隔离，让长时间运行的代理安全运转；通过 MCP 集成开放部署能力，并在代理需要之前预演回滚路径。</p>
    <div class="compare">
      <div class="cmp-col trad">
        <div class="cmp-label">传统</div>
        <p>流水线运行确定性脚本，任何需要判断的事都要等人：例如分诊不稳定的测试、撰写变更日志、查明构建为何失败。部署与回滚是人类在压力下手忙脚乱执行的运行手册。</p>
      </div>
      <div class="cmp-col ai">
        <div class="cmp-label">AI 原生</div>
        <p>Claude 在流水线内以非交互方式运行，负责判断类步骤——在带限定凭据的沙箱里。部署工具通过 MCP 暴露给代理，于是写下并测试了变更的工作流，也能发布它、回滚它，全程处在组织按环境定义的门禁之内。</p>
      </div>
    </div>
    <div class="gs">
      <div class="gs-title">快速上手</div>
      <div class="gs-rows">
        <div class="gs-row"><div class="gs-k">前置条件</div><div class="gs-v">PR 评审闭环中的 Claude 与作为审批门禁的 hooks——闸门必须先存在，自动化才能加速通过。</div></div>
        <div class="gs-row"><div class="gs-k">基础设施</div><div class="gs-v">装有 claude-code-action 的 CI 平台，或任何能调用 <code>claude -p</code> 的运行器；模型访问经由 API，或在流量必须留在组织云合同时用 Bedrock、Foundry、Vertex；面向部署目标的 MCP 服务器；面向代理任务、不含常备生产凭据的沙箱配置。</div></div>
      </div>
    </div>
  `
},

/* ================= P45 ================= */
{
  footer: '阶段 5 · 部署',
  html: `
    <div class="h-section" style="margin-top:30px">如何执行</div>
    <div class="page-body">
      <ol>
        <li>平台工程师从只读的判断步骤开始。在流水线作业中用 <code>claude -p</code> 分诊失败的构建、总结不稳定的测试，或起草变更日志。</li>
        <li>在既有门禁之后加入写入型步骤，用于修 lint、更新生成的文档、或通过 @claude 提及处理评审意见之类的作业。代理写的一切都经由分支保护以 PR 形式抵达，代理没有推送到 main 的路径。</li>
        <li>执行要沙箱化。代理任务在容器中运行，受网络策略约束、持有短时效的限定令牌，默认不持有生产凭据。</li>
        <li>通过 MCP 开放部署能力。部署、状态与回滚成为工具，按环境限定范围，于是代理的部署权限是一份允许清单，而不是一个带凭据的 shell 脚本。</li>
        <li>自主权按环境分层。在开发环境，代理自由部署；在生产环境，代理准备发布、发布经理授权，hook 强制生产门禁；预发环境居中。</li>
        <li>回滚应当是流水线中演练最多的路径：一条代理能运行、且在预发环境定期实操的单一命令。闭环实践（<strong>阶段 6：维护</strong>）在控制带被突破时调用的正是这条回滚，所以它必须事先被验证。</li>
      </ol>
    </div>
    <div class="page-body"><div class="code-label">它长什么样（流水线步骤）</div></div>
    <pre class="code">- name: 分诊失败的构建
  if: failure()
  run: >
    claude -p "阅读 out/build.log 中的构建日志。找出最可能的原因，
    说明这次失败看起来是不稳定还是真实问题，并为 PR 讨论串
    写一段三行摘要。" >> triage.md</pre>
  `
}

);
