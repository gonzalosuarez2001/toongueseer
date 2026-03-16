import { Palette, Image, RotateCw } from "lucide-react";
import ToonControlButton from "../molecules/ToonControlButton";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import {
  toggleDepixelationAndPersist,
  toggleDesaturationAndPersist,
  toggleRotationAndPersist,
} from "../../store/features/game/gameThunks";

export default function ToonControls() {
  const {
    solved,
    desaturation,
    depixelation,
    rotation,
    pixelDificulty,
    saturationDificulty,
    borderStyle,
  } = useAppSelector((state) => state.game);

  const dispatch = useAppDispatch();

  return (
    <>
      {!solved && (
        <div
          className={`bg-gray-200/90 border-4 ${borderStyle} rounded-lg mt-5 p-4 flex justify-around`}
        >
          <ToonControlButton
            title="Depixelation"
            icon={Image}
            active={depixelation}
            onClick={() => dispatch(toggleDepixelationAndPersist())}
            levels={true}
            difficulty={pixelDificulty}
          />
          <ToonControlButton
            title="Rotation"
            icon={RotateCw}
            active={rotation}
            onClick={() => dispatch(toggleRotationAndPersist())}
          />
          <ToonControlButton
            title="Desaturation"
            icon={Palette}
            active={desaturation}
            onClick={() => dispatch(toggleDesaturationAndPersist())}
            levels={true}
            difficulty={saturationDificulty}
          />
        </div>
      )}
    </>
  );
}
