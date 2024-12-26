import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";

type AlertProps = {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel?: () => void;
  isOpen: boolean;
  confirmLabel?: string;
  cancelLabel?: string;
  isLoading?: boolean;
}
export default function ConfirmAction({
  title,
  message,
  onConfirm,
  onCancel,
  isOpen,
  confirmLabel = "Confirmar",
  cancelLabel = "Cancelar",
  isLoading = false, }:
  AlertProps
) {
  return (
    <Modal isOpen={isOpen} onOpenChange={(open: boolean) => !open && onCancel?.()}>
      <ModalContent>
        {(onClose: () => void) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-black">{title}</ModalHeader>
            <ModalBody>
              <p  className="text-black">{message}</p>
            </ModalBody>
            <ModalFooter>
              <Button
                className="text-[--primary-color]"
                variant="light"
                onPress={() => {
                  onCancel?.();
                  onClose();
                }}
              >
                {cancelLabel}
              </Button>
              <Button
                className="bg-[--primary-color] text-white"
                isLoading={isLoading}
                onPress={() => {
                  onConfirm();
                  onClose();
                }}
              >
                {confirmLabel}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}