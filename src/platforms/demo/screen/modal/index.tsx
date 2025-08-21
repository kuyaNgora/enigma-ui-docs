import { Button, Modal, useEnigmaUI } from "@/components";
import { PropsTable } from "../../component/props.table";
import { CodeBlock } from "../../component/codeblock";
import {
  modalBodyProps,
  modalFooterProps,
  modalHeaderProps,
  modalProps,
  modalUsageExample,
  modalWrapperProps,
} from "./props";

const ModalExample = () => {
  const { openModal, closeModal } = useEnigmaUI();

  const handleOpen = () => {
    openModal({
      id: "confirm-delete",
      content: (
        <Modal.Wrapper
          open
          onClose={() => closeModal("confirm-delete")}
          closeOnOutsideClick={false}
        >
          <Modal.Header>Hapus Data</Modal.Header>
          <Modal.Body>Yakin ingin menghapus item ini?</Modal.Body>
          <Modal.Footer>
            <button
              onClick={() => closeModal("confirm-delete")}
              className="btn btn-ghost"
            >
              Batal
            </button>
            <button
              onClick={() => {
                closeModal("confirm-delete");
              }}
              className="btn btn-error"
            >
              Hapus
            </button>
          </Modal.Footer>
        </Modal.Wrapper>
      ),
    });
  };

  return (
    <div className="p-4 space-y-8">
      <h2 className="text-2xl font-bold mb-4">Modal</h2>
      <p className="text-sm text-gray-500 mb-6">
        This is an example of how to use the Modal component with various
        properties.
      </p>

      <div>
        <h4 className="text-xl font-semibold mb-4">Wrapper</h4>
        <p className="text-sm text-gray-500 mb-6">
          The Modal component is a flexible wrapper that can contain Header,
          Body, and Footer sections. It can be controlled via props to show or
          hide the modal.
        </p>
        <PropsTable rows={modalWrapperProps} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Header</h4>
        <p className="text-sm text-gray-500 mb-6">
          The header section of the modal, typically used for titles or
          important information.
        </p>
        <PropsTable rows={modalHeaderProps} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Body</h4>
        <p className="text-sm text-gray-500 mb-6">
          The body section of the modal, where the main content is displayed.
        </p>
        <PropsTable rows={modalBodyProps} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Footer</h4>
        <p className="text-sm text-gray-500 mb-6">
          The footer section of the modal, typically used for actions like
          confirmation or cancellation.
        </p>
        <PropsTable rows={modalFooterProps} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Modal Controller</h4>
        <p className="text-sm text-gray-500 mb-6">
          The footer section of the modal, typically used for actions like
          confirmation or cancellation.
        </p>
        <PropsTable rows={modalProps} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Usage Example</h4>
        <p className="text-sm text-gray-500 mb-6">
          You can open drawers dynamically by using the{" "}
          <code>useOnwardUI()</code> hook and calling <code>openModal()</code>{" "}
          with an <code>id</code> and <code>content</code>. Each drawer must
          manage its own <code>onClose</code> logic using{" "}
          <code>closeModal(id)</code>.
        </p>

        <Button variant="primary" onClick={handleOpen}>
          Buka Modal
        </Button>
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Code Example</h4>
        <CodeBlock language="tsx" code={modalUsageExample} />
      </div>
    </div>
  );
};

export default ModalExample;
