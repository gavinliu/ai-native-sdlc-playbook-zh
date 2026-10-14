/* 第 15–30 页：阶段 2 设计、阶段 3 构建、阶段 4 测试（开头） */
PAGES.push(

/* ================= P15 ================= */
{
  footer: '阶段 2 · 设计',
  html: `
    <div class="eyebrow">阶段 2 · 设计</div>
    <h1 class="page-title">需求与设计</h1>
    <p class="lead">intent.md 一经产品负责人批准，Claude 便接手这份被接受的 intent.md，产出需求与设计规格。这一过程由组织的品牌、安全、合规与 UX Skills 引导。</p>
    <div class="page-body">
      <p>产品负责人评审这份规格，但不撰写它。这个流程的目标是产出一份工程团队可据以制定计划的规格，并清楚标出关注点。</p>
      <p>前端工作是其中最典型的例子。intent.md 被接受后，产品负责人在 Claude Design（beta）中依据 intent.md 做出设计稿，迭代完善后导出到 Claude Code 进行构建。</p>
    </div>
    <div class="compare">
      <div class="cmp-col trad">
        <div class="cmp-label">传统</div>
        <p>需求与设计是由不同团队执行的独立阶段。分析师把想法形式化为需求，设计师再把它解读回设计。这种分离是为了问责，但缓慢且伴随信息损耗。</p>
      </div>
      <div class="cmp-col ai">
        <div class="cmp-label">AI 原生</div>
        <p>两个阶段在同一次提示会话中完成。Claude 读取 intent.md，产出需求与设计规格，受组织 Skills 约束，并标出关注点。</p>
      </div>
    </div>
    <div class="gs">
      <div class="gs-title">快速上手</div>
      <div class="gs-rows">
        <div class="gs-row">
          <div class="gs-k">前置条件</div>
          <div class="gs-v">写出一份 intent.md，并将品牌、安全、合规、UX 政策写成 Skills。</div>
        </div>
        <div class="gs-row">
          <div class="gs-k">基础设施</div>
          <div class="gs-v">一位有 Claude 访问权限的产品负责人。不需要工程技能。</div>
        </div>
      </div>
    </div>
  `
},

/* ================= P16 ================= */
{
  footer: '阶段 2 · 设计',
  html: `
    <div class="h-section" style="margin-top:30px">如何执行</div>
    <div class="page-body">
      <ol>
        <li>产品负责人开启一次会话，确保组织 Skills 已可用，并附上 intent.md。</li>
        <li>提示词指向 intent.md，点明约束，并要求标出关注点。起初手工执行，随后把它固化为组织级的 slash command。再进一步，把意图存放处中 intent.md 被接受设为触发器：合入时触发一个非交互任务，加载组织 Skills 执行这一遍，并以 PR 形式提交 spec.md（<strong>阶段 5：部署</strong> 的 CI/CD 实践覆盖这些管道细节）。到那时，产品负责人的第一次参与就是评审。</li>
        <li>同一位产品负责人对照最初的想法评审规格：它是否解决了所陈述的问题？intent.md 中的待决问题是有了答案，还是被继承下来？</li>
        <li>先处理被标出的关注点——这些正是分析师会升级上报的点。产品负责人在工程团队看到规格之前，与各自的政策负责人逐一解决。</li>
        <li>把 spec.md 与 intent.md 一起提交。这对文件记录了「要求了什么」与「决定了什么」。</li>
        <li>由产品负责人决定规格与意图是否进入构建；凡是被组织定为较高风险的事项，都要咨询技术负责人。这个决定始终由人类同事做出；接受规格，就是启动 <strong>阶段 3：构建</strong> 中 plan mode 实践的动作。</li>
      </ol>
    </div>
    <div class="page-body"><div class="code-label">它长什么样（提示词）</div></div>
    <pre class="code">阅读所附的 intent.md，产出一份将它集成进我们现有代码库的需求与设计规格。
应用你可用的 Skills，使方案符合我们的品牌指南、安全政策与 UX 标准。
将规格完整地写成 spec.md，可直接交给工程团队。
清楚地描述任何关注点，尤其是当相互冲突的政策无法同时满足时。</pre>
  `
},

/* ================= P17 ================= */
{
  footer: '阶段 2 · 设计',
  html: `
    <div class="h-section" style="margin-top:30px">治理考量</div>
    <div class="page-body">
      <p>现行政策不再要等到几周后的评审才被发现，而是在撰写规格时就被读取和应用。组织的 Skills 作为约束作用于规格。规格、生成它的提示词、以及当时生效的 Skill 版本，全部记录在版本控制中。产品负责人签字确认规格，并把标出的关注点转给具名的政策负责人。</p>
    </div>
    <div class="h-section">如何度量</div>
    <div class="measure">
      <div class="measure-rows">
        <div class="measure-row">
          <div class="measure-k">先行指标</div>
          <div class="measure-v">同一变更从 intent.md 提交到 spec.md 提交之间的耗时（两个 git 时间戳），与旧的「需求 + 设计」周期对比。</div>
        </div>
        <div class="measure-row">
          <div class="measure-k">滞后指标</div>
          <div class="measure-v">构建开始后的需求返工。统计同一变更中，日期晚于首次 plan.md 提交的 spec.md 提交次数。git log 可直接给出。</div>
        </div>
      </div>
    </div>
    <div class="quote-card lilac">
      <div class="qc-icon"><img src="assets/icon-dna.svg" width="62" alt=""></div>
      <div>
        <div class="qc-eyebrow">成对产物</div>
        <p>这对文件记录了要求了什么、决定了什么：intent.md 与 spec.md 并列，二者都在版本控制中。</p>
      </div>
    </div>
  `
},

/* ================= P18 分隔页 03 Build ================= */
{
  cls: 'divider', dividerInner: true,
  toc: '阶段 3 — 构建', tocSub: 'Plan mode · Auto mode · CLAUDE.md · Skills · Hooks · 并行会话',
  style: '--div: var(--div-3)',
  html: `
    <div class="divider-rule"></div>
    <div class="divider-num">03</div>
    <h1 class="divider-title">构建</h1>
    <p class="divider-desc">没有一份被接受的计划，什么都不开始实现。组织知识变成代理阅读的文件，护栏以代码而非习惯的形式运行。</p>
    <div class="divider-art"><img src="assets/p18-source-5.svg" width="276" alt=""></div>
  `
},

/* ================= P19 ================= */
{
  footer: '阶段 3 · 构建',
  html: `
    <div class="eyebrow">阶段 3 · 构建</div>
    <h1 class="page-title">把 Claude Code 的 plan mode<br>作为默认起点</h1>
    <p class="lead">工程师以 plan mode 开启 Claude Code 会话，把 <strong>阶段 2：设计</strong> 产出的、已获批的 spec.md 交给 Claude，让它来提问，反复迭代计划，直到工程师满意。</p>
    <div class="compare">
      <div class="cmp-col trad">
        <div class="cmp-label">传统</div>
        <p>工程师读完设计就开始写代码。变更将如何实现——具体动哪些文件、哪些测试——只存在于工程师的脑子里，顶多写进工单评论。没有别人能评审它。评审者看到的第一样东西是已完成的 diff，那时候再返工已经太慢。</p>
      </div>
      <div class="cmp-col ai">
        <div class="cmp-label">AI 原生</div>
        <p>工作从一份书面计划开始：Claude 在 plan mode 中产出它——它可以读取代码库但不做任何更改。工程师在写代码之前修正计划，获批的版本作为 plan.md 提交，供后续阶段对照检查。</p>
      </div>
    </div>
    <div class="gs">
      <div class="gs-title">快速上手</div>
      <div class="gs-rows">
        <div class="gs-row">
          <div class="gs-k">前置条件</div>
          <div class="gs-v">意图产物（<code>intent.md</code> 或 <code>spec.md</code>），如果已有的话；此外 CLAUDE.md 会有帮助。</div>
        </div>
        <div class="gs-row">
          <div class="gs-k">基础设施</div>
          <div class="gs-v">可访问该仓库的 Claude Code。</div>
        </div>
      </div>
    </div>
    <div class="h-section">如何执行</div>
    <div class="page-body">
      <ol>
        <li>工程师以 plan mode 与 Claude 开启会话。</li>
        <li>工程师把 intent.md 和 spec.md 交给 Claude，要求一份实施计划，其中点名要改的文件、工作顺序，以及能证明其正确性的测试。</li>
        <li>盘问这份计划：这个变更可能弄坏什么？哪一步风险最高？Claude 放弃了哪些其他方案？</li>
      </ol>
    </div>
  `
},

/* ================= P20 ================= */
{
  footer: '阶段 3 · 构建',
  html: `
    <div class="page-body" style="margin-top:6px">
      <ol start="4">
        <li>持续迭代，直到一位从未看过这段对话的工程师，仅凭计划就能完成这个变更。</li>
        <li>把获批的计划作为 plan.md 提交。计划加入审计轨迹，PR 评审实践（<strong>阶段 5：部署</strong>）会把最终的 diff 与它对照检查。</li>
        <li>接受计划，让 Claude 开始实现。计划扎实时，实现往往一遍通过。</li>
        <li>实现偏离计划时，在同一次提交里更新 plan.md。可以考虑用一个 hook 强制二者同步。</li>
      </ol>
    </div>
    <div class="page-body"><div class="code-label">它长什么样（plan.md）</div></div>
    <pre class="code"># 计划：理赔状态自助查询（源自 intent.md 2026-06-02）

## 变更的文件
portal/src/claims/StatusPanel.tsx（新增）、claims-api/routes/status.py、
claims-api/tests/test_status.py

## 工作顺序
1. 在现有认证之后新增状态接口。
2. 基于该接口实现面板。
3. 接入门户导航。

## 风险
claims-core API 限流 50 rps；面板必须做缓存。

## 证明
test_status.py 覆盖四种理赔状态；截图与已批准的设计稿一致。</pre>
    <div class="h-section">治理考量</div>
    <div class="page-body">
      <p>设计评审发生在生成任何代码之前——此时改道还只是编辑文档的事。plan mode 本身就强制了这一点：工程师接受计划之前，Claude 无法编辑文件。计划及其修订、连同接受者，都会被记录。常规变更由工程师批准；凡组织定为较高风险的事项，交给技术负责人或架构师。</p>
    </div>
  `
},

/* ================= P21 ================= */
{
  footer: '阶段 3 · 构建',
  html: `
    <div class="h-section" style="margin-top:30px">如何度量</div>
    <div class="measure">
      <div class="measure-rows">
        <div class="measure-row">
          <div class="measure-k">先行指标</div>
          <div class="measure-v">首次实现即合入的变更占比，以及从计划获批到 PR 合入的时间——所需数据都在 PR 元数据中。</div>
        </div>
        <div class="measure-row">
          <div class="measure-k">滞后指标</div>
          <div class="measure-v">每个变更的返工轮数（同样来自 PR 元数据），以及合入的 diff 与已提交 plan.md 仍然一致的频率。</div>
        </div>
      </div>
    </div>
    <hr style="border:none;border-top:1px solid var(--ink);margin:40px 0 34px">
    <h2 class="page-title sm">Claude Code 的 auto mode</h2>
    <div class="page-body">
      <p>Claude Code 也可以运行在 auto mode：工程师批准计划、并在迭代满意之后，Claude 无需每次编辑都请求确认，逐项应用变更。随着后续实践中护栏的成熟（调校过的 CLAUDE.md、编码了政策的 Skills、阻断不安全操作的 hooks、以及 Claude 能运行的测试套件），自动接受会成为常规工作的默认方式——前提是：紧凑的 spec.md、小影响范围、且代码已被测试覆盖。</p>
      <p>重心正在转移：从用户盯着代理做编辑、评审每一个动作，转向在更长的自主会话之后评审产物。配合 worktrees 使用时，自动接受模式进一步释放个人与团队的并行能力；它也是在 <strong>阶段 6：维护</strong> 中自主运行 SDLC、闭合环路的基础。</p>
    </div>
  `
},

/* ================= P22 SIDEBAR ================= */
{
  footer: '阶段 3 · 构建',
  html: `
    <div class="dark-card sidebar" style="margin-top:30px">
      <div class="dc-side">
        <hr class="dc-rule">
        <div class="dc-eyebrow">侧栏</div>
        <h2>遗留系统与事实来源</h2>
        <p class="dc-sub">适用于流程产出的每一种产物。</p>
      </div>
      <div class="dc-main">
        <p>现有的 SDLC 流程很可能已经在追踪产物了，只是不在 markdown 文件里：工作项可能在 Jira，需求在带合规追溯能力的工具里，设计在 Figma，变更审批走变更委员会。这些系统很难被取代，因为审计师和监管方已经认可它们，其他团队也依赖它们——所以 AI 原生 SDLC 必须围绕现状来适配。</p>
        <p>在向 AI 原生 SDLC 过渡时，为流程产出的每一种产物指定一个「事实来源」系统，其余系统只保存副本或指向原件的链接。以下配置都可以实现单一事实来源，具体选择因产物而异：</p>
        <p><strong>以仓库为事实来源。</strong>markdown 产物是权威记录，遗留系统引用提交中的文件。对工程主导的组织，这可能是最干净的配置之一：所有记录都在一个工具里，只有一个时间戳权威。</p>
        <p><strong>以遗留系统为事实来源。</strong>Jira、ServiceNow 或需求工具持有权威记录，markdown 产物是工作副本。Claude 在会话开始时读取记录，并在产出规格或计划的同一次会话中，通过 MCP 连接器把结果写回。</p>
        <p><strong>以关联作为最低标准。</strong>所有产物都注明记录 ID，所有遗留记录都包含 markdown 文件的提交 SHA。在过渡期，接受存在两个事实来源，从建立关联开始是不错的起点。</p>
        <p>遗留系统与 markdown 优先的系统可以共存，只要二者之间有关联，或已声明其中之一为事实来源。</p>
      </div>
    </div>
  `
},

/* ================= P23 ================= */
{
  footer: '阶段 3 · 构建',
  html: `
    <h2 class="page-title sm">CLAUDE.md</h2>
    <div class="page-body">
      <p>CLAUDE.md 把一位新加入的同事所需的上下文交给 Claude：约定、命令、架构，以及团队最常犯的错误。过去留在人们脑中、躺在 wiki 上的知识，变成一个代理在每次会话开始时都会读取的文件，由整个团队维护，每犯一次错就迭代一次。</p>
    </div>
    <div class="gs">
      <div class="gs-title">快速上手</div>
      <div class="gs-rows">
        <div class="gs-row">
          <div class="gs-k">前置条件</div>
          <div class="gs-v">无。</div>
        </div>
        <div class="gs-row">
          <div class="gs-k">基础设施</div>
          <div class="gs-v">一个仓库、安装好的 Claude Code，以及一位熟悉代码库的工程师。</div>
        </div>
      </div>
    </div>
    <div class="h-section">如何执行</div>
    <div class="page-body">
      <ol>
        <li>在仓库中运行 <code>/init</code>。Claude 会根据它的发现生成一份初始 CLAUDE.md。</li>
        <li>把生成的文件精简到「新同事第一天真正需要」的程度。保留构建、测试和 lint 命令、重要的约定、以及 Claude 反复弄错的事。</li>
        <li>把 CLAUDE.md 提交到仓库根目录的 git 中，让全团队共享同一版本，变更像代码一样接受评审。</li>
        <li>一条实用规则很有帮助：当 Claude 第二次犯同一个错时，纠正内容进 CLAUDE.md。</li>
        <li>控制在一页以内——Claude 会在每次会话开始时通读全文，过时的内容只会白白占用上下文。</li>
      </ol>
    </div>
  `
},

/* ================= P24 ================= */
{
  footer: '阶段 3 · 构建',
  html: `
    <div class="page-body"><div class="code-label">它长什么样（CLAUDE.md）</div></div>
    <pre class="code"># 支付服务

## 命令
- 构建：make build
- 测试：make test（单元）、make itest（集成，需要 docker）
- Lint：make lint（在 CI 中运行；推送前修复）

## 约定
- Java 21、Spring Boot 3。不引入新的 Lombok。
- 金额一律用 BigDecimal，绝不用 double。
- 每个接口都需要在 src/itest 中有集成测试。

## 架构
- api/ 放 REST 控制器，core/ 放领域逻辑，
  adapters/ 对接外部系统。
- Kafka 事件定义在 schemas/ 中；永不修改生成的类。

## Claude 常犯的错误
- 不要升级依赖版本；它们由平台团队管理。
- 遗留的 v1/ 包已冻结；变更一律进 v2/。</pre>
    <div class="h-section">治理考量</div>
    <div class="page-body">
      <p>CLAUDE.md 受版本控制，因此代理遵循的指令可评审、可审计。团队约定通过该文件生效，对它的变更记录在 git 历史中，由代码负责人在 PR 评审中批准。</p>
    </div>
    <div class="h-section">如何度量</div>
    <div class="measure">
      <div class="measure-rows">
        <div class="measure-row">
          <div class="measure-k">先行指标</div>
          <div class="measure-v">Claude 重复犯「CLAUDE.md 本应拦下」的错误的频率。对 CLAUDE.md 的纠正或修改可在 git 历史中追踪。</div>
        </div>
        <div class="measure-row">
          <div class="measure-k">滞后指标</div>
          <div class="measure-v">新团队成员从入职到首个 PR 合入的时间，取自 PR 历史。</div>
        </div>
      </div>
    </div>
  `
},

/* ================= P25 ================= */
{
  footer: '阶段 3 · 构建',
  html: `
    <h2 class="page-title sm">让 Skills 承载组织知识</h2>
    <div class="page-body">
      <p>Skills 是组织让自身知识投入运转的方式：指令明确、受版本控制、广泛执行，政策变化时集中更新。经验法则：凡是必须被一致执行的组织知识，就写成 Skill；凡是更适合放在 CLAUDE.md 或提示词里的内容，就不要写成 Skill。</p>
    </div>
    <div class="gs">
      <div class="gs-title">快速上手</div>
      <div class="gs-rows">
        <div class="gs-row">
          <div class="gs-k">前置条件</div>
          <div class="gs-v">没有必需项。拥有 CLAUDE.md 有帮助，因为它让代理的工作知识留在仓库里，但 Skill 并不依赖它。</div>
        </div>
        <div class="gs-row">
          <div class="gs-k">基础设施</div>
          <div class="gs-v">一项政策：有具名的负责人，有书面的权威出处。</div>
        </div>
      </div>
    </div>
    <div class="h-section">如何执行</div>
    <div class="page-body">
      <ol>
        <li>挑一条今天执行得不一致的知识：可以是一项安全标准、一条 API 设计约定、或一条品牌规则。</li>
        <li>把它写成一个 Skill：一个包含 SKILL.md 的文件夹，frontmatter 说明何时触发，正文说明要做什么。由工程师依据政策负责人的权威出处撰写，可以让 Claude 帮忙。</li>
        <li>把 Skill 放在仓库的 <code>.claude/skills/&lt;name&gt;/</code> 下，让它随代码分发；或者通过插件在全组织范围内分发。</li>
        <li>测试触发：用不同方式让 Claude 做相关任务，确认每次都能加载该 Skill。</li>
        <li>政策变化时，修改 Skill，并由政策负责人签字确认。</li>
        <li>工程师在下一次会话中自动获得新版本。</li>
      </ol>
    </div>
  `
},

/* ================= P26 ================= */
{
  footer: '阶段 3 · 构建',
  html: `
    <div class="page-body"><div class="code-label">它长什么样（.claude/skills/secure-api-review/SKILL.md）</div></div>
    <pre class="code">---
name: secure-api-review
description: 应用 API 安全标准。在创建或修改对外接口、评审 API 代码、
  或生成 OpenAPI 规格时使用。
---
# 安全 API 评审

当你创建或修改 API 接口时：
1. 认证：每个接口都必须通过网关 JWT；/health 之外
   不得有匿名路由。
2. 输入校验：按 OpenAPI schema 校验请求体，拒绝未知字段。
3. 审计：每个改变状态的接口都要发出审计事件，包含
   actor、action、entity 和时间戳。
4. 数据分级：schema 中标记为 pii 的字段绝不能
   出现在日志或错误消息里。

运行 scripts/check-endpoints.sh，并把输出包含在你的总结中。</pre>
    <div class="h-section">治理考量</div>
    <div class="page-body">
      <p>Skill 是一种控制，但属于建议性控制：它让 Claude 在写代码时「很可能」应用政策，但没有任何机制强制一次会话必须遵守它。必须永远成立的政策，需要在 Skill 背后放一个确定性机制，比如阻断操作的 hook，或在 PR 处重新核对政策的评审环节。Skill 让违规变得罕见，hook 让违规几乎不可能。Skill 的调用记录在会话轨迹中，政策负责人像审查代码一样审查 Skill 的变更。</p>
    </div>
    <div class="h-section">如何度量</div>
    <div class="measure">
      <div class="measure-rows">
        <div class="measure-row">
          <div class="measure-k">先行指标</div>
          <div class="measure-v">从政策负责人批准一次政策变更，到更新后的 Skill 合入所用的时间，取自 Skill 文件夹上的 PR。</div>
        </div>
        <div class="measure-row">
          <div class="measure-k">滞后指标</div>
          <div class="measure-v">PR 评审中引用该政策的结论数量——当 Skill 能在写代码时应用政策之后，它应趋近于零。如果迟迟不降，要么 Skill 没有触发，要么它的文本已经偏离官方政策。</div>
        </div>
      </div>
    </div>
  `
},

/* ================= P27 ================= */
{
  footer: '阶段 3 · 构建',
  html: `
    <h2 class="page-title sm">Hooks：构建期的护栏</h2>
    <div class="page-body">
      <p>Skill 是建议性控制，而 hook 是它背后的确定性层。实现阶段，Claude 的大多数动作是文件编辑和 shell 命令，因此构建期是 hooks 触发最频繁的地方。</p>
      <p>构建期的 hooks 可以：</p>
      <ul>
        <li>阻断对受保护路径的编辑，如生成的类或已冻结的包；</li>
        <li>在文件编辑后运行格式化和 lint，让漂移永不累积；</li>
        <li>把凭据挡在 diff 之外。</li>
      </ul>
      <p>凡是必须无条件成立的政策，都要在对应 Skill 背后放上 hook。hook 会在每个匹配的动作上运行，所以构建期 hooks 应该快、并限定在发生变更的文件上。更重的检查（如完整测试套件）属于提交或 PR 环节。</p>
      <p>需要人工批准的 hook 属于 <strong>阶段 5：部署</strong> 的门禁，因为构建期间弹出审批请求，会把人重新放回所有并行会话的关键路径上。</p>
    </div>
    <hr style="border:none;border-top:1px solid var(--ink);margin:38px 0 32px">
    <h2 class="page-title sm">并行会话与子代理</h2>
    <div class="page-body">
      <p>一名工程师可以同时驱动多条工作流。</p>
      <p>并行会话是另一个完整的 Claude Code 实例，在自己的 git worktree 中处理独立任务。各个会话彼此一无所知，唯一共享的是指挥它们的工程师。</p>
      <p>子代理在单个会话内部运行，是一个有明确边界的助手，拥有自己的上下文窗口和工具权限，适合在多个任务中反复出现的工作，比如验证应用是否按预期运行。</p>
    </div>
  `
},

/* ================= P28 ================= */
{
  footer: '阶段 3 · 构建',
  html: `
    <div class="page-body" style="margin-top:6px">
      <p>并行会话提高了工程师同时在手的任务数量，子代理则让每个会话专注于自己的任务。工程师的工作是指挥和评审所有这些会话。</p>
    </div>
    <div class="compare">
      <div class="cmp-col trad">
        <div class="cmp-label">传统</div>
        <p>一名工程师一次做一个任务，每天或每周有相当一部分时间花在构建、测试和评审上。等待时切换任务不是不行，但上下文切换足够累人，很少有人愿意这么做。</p>
      </div>
      <div class="cmp-col ai">
        <div class="cmp-label">AI 原生</div>
        <p>一名工程师同时运行多个 Claude 会话，每个会话在自己的 worktree 上做自己的任务。重复性工作变成拥有独立上下文与工具权限的子代理。工程师的工作转向编排，最终转向构建和监控「环」。</p>
      </div>
    </div>
    <div class="gs">
      <div class="gs-title">快速上手</div>
      <div class="gs-rows">
        <div class="gs-row">
          <div class="gs-k">前置条件</div>
          <div class="gs-v">CLAUDE.md，因为所有会话都会读取该文件。反馈闭环（<strong>阶段 4：测试</strong>）在这里也有帮助：当会话能自行验证工作时，工程师所需的监督就更少。</div>
        </div>
        <div class="gs-row">
          <div class="gs-k">基础设施</div>
          <div class="gs-v">一个 git 仓库——隔离来自 worktrees，以及调校好的权限设置，使会话不会因为组织认定为安全的命令而卡在审批请求上。</div>
        </div>
      </div>
    </div>
    <div class="h-section">如何执行</div>
    <div class="page-body">
      <ol>
        <li>工程师把工作拆成触达不同文件的任务，利用 plan mode 实践（<strong>阶段 3：构建</strong>）产出的计划来判断哪些工作彼此独立。共享文件的任务放在单个会话中顺序执行。</li>
        <li>每个并行任务有自己的 worktree，例如一个终端里运行 <code>claude --worktree feature-auth</code>，另一个运行 <code>claude --worktree fix-rate-limit</code>。worktree 是独立分支上的单独检出，避免会话之间在文件上冲突。</li>
        <li>两到三个会话是合理的起点。实际上限取决于一个人能认真评审多少条工作流——只有在评审跟得上时才继续增加会话。</li>
      </ol>
    </div>
  `
},

/* ================= P29 ================= */
{
  footer: '阶段 3 · 构建',
  html: `
    <div class="page-body" style="margin-top:6px">
      <ol start="4">
        <li>把重复性工作变成子代理——用 <code>.claude/agents/</code> 下的 markdown 文件定义，每个包含名称、何时使用的说明、以及可动用的工具。示例包括：在主代理完成后剥离无谓复杂度的代码简化器；运行应用并检查行为的验证器；探索代码库、汇报结果而不淹没主上下文的调研员。把这些定义提交进 git，让全团队共享。</li>
      </ol>
    </div>
    <div class="page-body"><div class="code-label">它长什么样（.claude/agents/verifier.md）</div></div>
    <pre class="code">---
name: verifier
description: 在会话报告完成之前，运行应用并检查变更是否生效
tools: Bash, Read
---
用 make run 启动应用。演练被变更的行为，以及最近的两个
相邻流程。报告你运行了什么、看到了什么，以及任何与 plan.md
不符的行为。不要修复任何东西；只做报告。</pre>
    <div class="h-section">治理考量</div>
    <div class="page-body">
      <p>会话越多，产出越多，因此管控必须来自仓库中的配置。其中的 hooks 和权限设置作用于所有会话；会话做了什么会被记录，并归属到运行它的工程师名下。</p>
    </div>
    <div class="h-section">如何度量</div>
    <div class="measure">
      <div class="measure-rows">
        <div class="measure-row">
          <div class="measure-k">先行指标</div>
          <div class="measure-v">评审质量保持的前提下，每位工程师的并发会话数（取自 OpenTelemetry 导出），以及一天中用于指挥而非等待的时间占比。</div>
        </div>
        <div class="measure-row">
          <div class="measure-k">滞后指标</div>
          <div class="measure-v">每位工程师每周合入的变更数，与按 PR 历史计算的返工率并排观察。</div>
        </div>
      </div>
    </div>
  `
},

/* ================= P30 分隔页 04 Test ================= */
{
  cls: 'divider', dividerInner: true,
  toc: '阶段 4 — 测试', tocSub: '给 Claude 一个反馈闭环 · CI 中的持续评估',
  style: '--div: var(--div-4)',
  html: `
    <div class="divider-rule"></div>
    <div class="divider-num">04</div>
    <h1 class="divider-title">测试</h1>
    <p class="divider-desc">每次会话在人类看到成果之前先自查其工作；指挥代理的配置，也要像它写出的代码一样接受回归测试。</p>
    <div class="divider-art"><img src="assets/p30-source-5.svg" width="256" alt=""></div>
  `
}

);
