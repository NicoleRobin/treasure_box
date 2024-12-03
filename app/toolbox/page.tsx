import {lusitana} from "@/app/ui/fonts";
import {Card} from "@/app/ui/toolbox/cards";

export default function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        工具箱
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="密码生成器" type="password" href="/toolbox/developer/password"/>
        <Card title="密码生成器" type="password" href="/toolbox/developer/password"/>
        <Card title="密码生成器" type="password" href="/toolbox/developer/password"/>
        <Card title="密码生成器" type="password" href="/toolbox/developer/password"/>
        <Card title="密码生成器" type="password" href="/toolbox/developer/password"/>
        <Card title="密码生成器" type="password" href="/toolbox/developer/password"/>
        <Card title="密码生成器" type="password" href="/toolbox/developer/password"/>
        <Card title="密码生成器" type="password" href="/toolbox/developer/password"/>
        <Card title="密码生成器" type="password" href="/toolbox/developer/password"/>
      </div>
    </main>
  )
}