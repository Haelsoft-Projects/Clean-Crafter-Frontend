import React from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import { FaRegCheckCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
type props = {
  isOpen: boolean;
  onClose: () => void;
};
const ModalComponent = ({ isOpen, onClose }: props) => {
  const router = useRouter();

  return (
    <div>
      {" "}
      <Modal
        size={"lg"}
        isOpen={isOpen}
        onClose={() => {
          router.push("/");
          onClose();
        }}
        placement="center"
      >
        <ModalContent className="py-20">
          {(onClose) => (
            <>
              <ModalBody className="flex flex-col justify-center  items-center gap-y-6">
                <FaRegCheckCircle className="text-8xl text-green-400 text-center " />
                <p className="text-2xl text-center font-semibold">
                  Registered Sucessfully
                </p>
                <p className=" text-center text-lg text-[#3b3b3b]">
                  You would be Contacted by Our Team for Jobs
                </p>
                <button
                  onClick={() => {
                    router.push("/");
                    onClose();
                  }}
                  className="bg-blue-500 text-white px-8 py-2 rounded-md"
                >
                  Close
                </button>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ModalComponent;
