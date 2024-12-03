import {lusitana} from "@/app/ui/fonts";
import {Card} from "@/app/ui/toolbox/cards";

export default function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        工具箱
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" type="collected" />
        <Card title="Pending" type="pending" />
        <Card title="Total Invoices" type="invoices" />
        <Card title="Total Customers" type="customers" />
      </div>
    </main>
  )
}