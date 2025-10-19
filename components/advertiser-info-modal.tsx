"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { X } from "@/components/icons"

interface AdvertiserInfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserInfoModal({ isOpen, onClose }: AdvertiserInfoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[90vw] max-w-[500px] p-4 md:p-6 bg-white z-50 max-h-[85vh] overflow-y-auto">
        <DialogHeader className="pb-3">
          <DialogTitle className="text-center text-lg md:text-xl text-gray-900 font-bold">
            Informação Importante
          </DialogTitle>
          <DialogClose className="absolute right-3 top-3 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Fechar</span>
          </DialogClose>
        </DialogHeader>

        <div className="py-2 space-y-4">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <h3 className="font-bold text-sm md:text-base mb-2 text-amber-800">Nota Importante</h3>
            <p className="text-xs md:text-sm text-gray-800 leading-relaxed">
              <strong>ptapostasdesportivas.com</strong> é um site de análise e comparação independente.{" "}
              <strong>Não operamos apostas desportivas.</strong> Todas as casas de apostas listadas são operadores
              licenciados pelo <strong>SRIJ (Serviço de Regulação e Inspeção de Jogos)</strong> em Portugal. Este site
              contém links de afiliados e podemos receber comissões quando visita operadores através dos nossos links.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm md:text-base mb-2">Informação Publicitária</h3>
            <div className="space-y-2">
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                ptapostasdesportivas.com é um serviço gratuito para ajudá-lo a encontrar plataformas de apostas.
                Recebemos taxas de marcas em destaque, afetando a sua colocação.
              </p>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                Todos os sites em destaque são licenciados por autoridades respeitáveis. Esforçamo-nos pela precisão,
                mas não podemos ser responsabilizados por imprecisões.
              </p>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                Bónus e ofertas estão sujeitos a alterações. Leia sempre os termos completos no site do operador antes
                de reivindicar.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm md:text-base mb-2">Restrição de Idade</h3>
            <div className="space-y-2">
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                Este site é para indivíduos com 18 anos ou mais. Ao usar o nosso site, confirma que cumpre este
                requisito.
              </p>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                O jogo deve ser apenas para entretenimento. Nunca jogue com dinheiro que não pode perder.
              </p>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                Se está a lutar com problemas de jogo, procure ajuda do SICAD ou outros serviços de apoio.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
