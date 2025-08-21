import type { PropRow } from "../../component/props.table";

export const modalProps: PropRow[] = [
  {
    name: "openModal",
    type: "({ id?: string, content: ReactNode }) => void",
    description:
      "Function to show a modal dynamically. The modal content is passed via `content`. You can optionally pass a custom `id`.",
  },
  {
    name: "closeModal",
    type: "(id?: string) => void",
    description:
      "Function to close a modal by its `id`. Defaults to `default`.",
  },
];

export const modalWrapperProps: PropRow[] = [
  {
    name: "open",
    type: "boolean",
    required: true,
    description: "Controls the visibility of the modal.",
  },
  {
    name: "onClose",
    type: "() => void",
    required: true,
    description: "Callback fired when the modal requests to be closed.",
  },
  {
    name: "children",
    type: "ReactNode",
    description:
      "Content inside the modal wrapper, usually includes Header, Body, and Footer.",
  },
  {
    name: "closeOnOutsideClick",
    type: "boolean",
    defaultValue: "true",
    description: "Whether clicking outside the modal should close it.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional classes for modal container.",
  },
];

export const modalHeaderProps: PropRow[] = [
  {
    name: "children",
    type: "ReactNode",
    description: "Content to be displayed in the modal header.",
  },
];

export const modalBodyProps: PropRow[] = [
  {
    name: "children",
    type: "ReactNode",
    description: "Content to be rendered inside the modal body.",
  },
  {
    name: "full",
    type: "boolean",
    defaultValue: "false",
    description: "If true, body will have no padding and expand fully.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional classes for body container.",
  },
];

export const modalFooterProps: PropRow[] = [
  {
    name: "children",
    type: "ReactNode",
    description: "Footer content, usually action buttons.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional classes for footer container.",
  },
];

export const modalUsageExample = `
import { Button, Modal, useOnwardUI } from "@/components";

const ModalExample = () => {
  const { openModal, closeModal } = useOnwardUI();

  const handleOpen = () => {
    openModal({
      content: (
        <Modal.Wrapper open onClose={() => closeModal()}>
          <Modal.Header>Example Modal</Modal.Header>
          <Modal.Body>
            This is an example of a modal body content.
          </Modal.Body>
          <Modal.Footer>
            <button onClick={() => closeModal()} className="btn btn-ghost">
              Close
            </button>
          </Modal.Footer>
        </Modal.Wrapper>
      ),
    });
  };

  return (
    <Button variant="primary" onClick={handleOpen}>
      Buka Modal
    </Button>
  )
}
`.trim();
