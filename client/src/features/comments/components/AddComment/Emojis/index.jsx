import dataPicker from "@emoji-mart/data";
import EmojiPicker from "@emoji-mart/react";
import { AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SVGEmoji from "../../../../../assets/icons/vectors/emoji.svg";
import useClose from "../../../../../hooks/useClose";
import useMotion from "../../../../../hooks/useMotion";
import { setComment } from "../../../slices/comment";
import * as Styled from "./style";

export default function Emojis() {
    const dispatch = useDispatch();
    const comment = useSelector(({ comment }) => comment.content);
    const theme = useSelector(({ theme }) => theme);
    const [show, setShow] = useState(false);
    const motionProps = useMotion({
        variants: {
            initial: { opacity: 0, y: 15 },
            animate: { opacity: 1, y: 0 },
        },
    });
    const wrapperRef = useRef(null);

    useClose({
        state: show,
        callback: () => setShow(false),
        clickOutside: { ref: wrapperRef, close: false },
    });

    return (
        <Styled.Wrapper ref={wrapperRef}>
            <Styled.Button aria-label="Ver emojis" onClick={() => setShow(!show)}>
                <SVGEmoji />
            </Styled.Button>

            <AnimatePresence>
                {show && (
                    <Styled.PickerWrapper {...motionProps}>
                        <EmojiPicker
                            data={dataPicker}
                            locale="pt"
                            theme={theme}
                            navPosition="bottom"
                            previewPosition="none"
                            skinTonePosition="none"
                            maxFrequentRows={1}
                            perLine={8}
                            emojiSize={32}
                            emojiButtonSize={40}
                            onEmojiSelect={({ native }) =>
                                dispatch(setComment(comment + native))
                            }
                        />
                    </Styled.PickerWrapper>
                )}
            </AnimatePresence>
        </Styled.Wrapper>
    );
}
