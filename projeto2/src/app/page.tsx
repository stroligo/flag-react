import Button from '@/components/Button/Button';

export default function Home() {
  return (
    <div className="flex flex-col gap-2">
      <div>Modelo</div>
      <div>
        <Button>Clique aqui</Button>
      </div>
      <a href="/about">Sobre</a>
    </div>
  );
}
