import"dotenv/config";import{Command as G}from"commander";import"dotenv/config";import{existsSync as j,promises as _}from"fs";import a from"path";import C from"gradient-string";import{Command as E}from"commander";import N from"ora";import{execa as b}from"execa";import u from"prompts";import i from"chalk";var l={error(...o){console.log(i.red(...o))},warn(...o){console.log(i.yellow(...o))},info(...o){console.log(i.cyan(...o))},success(...o){console.log(i.green(...o))},break(){console.log("")}};var w=process.env.COMPONENTS_REGISTRY_URL??"http://localhost:3000/api/components";console.log({COMPONENT_REGISTERY_URL:w});console.log(C("cyan","pink")("FARMUI"));var y=new E().name("farmui-add").description("Adding a new component for farmui from terminal").argument("<string>","Id of the componnt from farmui.com").option("--id","id of the component").option("-c, --cwd <cwd>","the working directory. defaults to the current directory.",process.cwd()).action(async(o,e)=>{console.log({opts:e});try{let c="components",{dir:p}=await u({type:"text",name:"dir",message:"A directory where it should be living",hint:"./components "});console.log({dir:p}),p&&(c=p);let m=a.join(process.cwd(),c),s=a.join(m,"/ui");if(j(m)){l.info("The component already existed");let{proceed:n}=await u({type:"confirm",name:"proceed",message:"Ready to install components and dependencies. Proceed?",initial:!0})}console.log(m),console.log({root_dir:s}),await _.mkdir(s,{recursive:!0});let r=[],f=await fetch(w);console.log(f);let g=await f.json();console.log("The file is : ",g);let t=g.find(n=>n.id===o);console.log({select_files_by_id:t});let x=t.files[0].root.name,I=t.files[0].root.contents[0].content,P=a.join(s,x),S=t.files[1].child;r.push({comp_content:I,comp_path:P});let U=[];S.map(n=>{let d=n.name,v=n.contents[0].content,R=a.join(s,d);r.push({comp_content:v,comp_path:R})});let h=t.dependencies,T=N("Installing components...").start();r?r.map(async({comp_content:n,comp_path:d})=>{await _.writeFile(`${d}.tsx`,n)}):l.warn("No component to add"),h?.length&&await b("pnpm",["install",...h],{cwd:process.cwd()}),T.succeed("Successfully installed")}catch(c){console.log("Error: ",c)}});import A from"path";import O from"fs-extra";function k(){let o=A.join("package.json");return O.readJSONSync(o)}process.on("SIGINT",()=>process.exit(0));process.on("SIGTERM",()=>process.exit(0));async function J(){let o=await k(),e=new G().name("farmui").description("Add natively farmed farmUI blocks ").version(o.version||"1.0.0","-v, --version","display the version number");e.addCommand(y),e.parse()}J();
//# sourceMappingURL=index.js.map