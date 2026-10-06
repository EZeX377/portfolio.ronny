"use client";
import { useEffect, useRef, useState } from "react";
import { usePortfolio } from "./PortfolioProvider";
import { useNativeDialog, closeOnBackdrop } from "./useNativeDialog";
import ProjectBrowser from "./ProjectBrowser";
import projects from "./projectData.json";
function DialogTop({ children, label, close }) {
    return <div data-slot="dialog-top" className={"flex items-center justify-between gap-5 p-[16px_27px] [border-bottom:1px_solid_var(--line)] sticky top-0 bg-bg z-[2] max-[560px]:p-[13px_20px]"}><span data-slot="mono" className={"type-mono [[data-slot~='dialog-top']>&]:text-[12px] [[data-slot~='dialog-top']>&]:text-muted [@media_(min-width:801px)]:text-[12px] [@media_(min-width:801px)]:[[data-slot~='dialog-top']>&]:text-[12px]"}>{children}</span><button data-slot="dialog-close control" className={"h-11 min-w-11 inline-flex justify-center items-center gap-2 p-2.25 [background:transparent] [border:1px_solid_var(--line)] rounded-[50%] [transition:background_.2s,color_.2s] hover:bg-soft [&_svg]:w-4.5 [&_svg]:h-4.5 [&_svg]:[fill:none] [&_svg]:[stroke:currentColor] [&_svg]:[stroke-width:1.4] [&_svg]:[stroke-linecap:round] text-[27px] leading-[1] [&:disabled]:[cursor:default] [&:disabled]:opacity-[.65]"} aria-label={label} onClick={close}><span aria-hidden="true">×</span></button></div>;
}
export default function PortfolioDialogs() {
    const { dialog, closeDialog, openContact } = usePortfolio();
    const projectRef = useRef(null), contactRef = useRef(null);
    const [copyStatus, setCopyStatus] = useState("");
    const contactOpen = dialog?.type === "contact";
    const project = dialog?.type === "project" ? projects.find(item => item.id === dialog.id) : null;
    useNativeDialog(projectRef, !!project);
    useNativeDialog(contactRef, contactOpen);
    useEffect(() => { if (!contactOpen)
        setCopyStatus(""); }, [contactOpen]);
    const copyEmail = async () => {
        setCopyStatus("");
        try {
            await navigator.clipboard.writeText("iamronnydas@gmail.com");
            if (contactRef.current?.open)
                setCopyStatus("Email address copied.");
        }
        catch {
            if (contactRef.current?.open)
                setCopyStatus("Select and copy the address above. Clipboard access is unavailable in this browser.");
        }
    };
    const copied = copyStatus === "Email address copied.";
    return <>
    <dialog id="project-dialog" ref={projectRef} aria-labelledby="dialog-title" onCancel={closeDialog} onClose={() => { if (dialog?.type === "project")
        closeDialog(); }} onClick={event => closeOnBackdrop(event, closeDialog)}>
      <DialogTop label="Close project overview" close={closeDialog}>PROJECT OVERVIEW</DialogTop>
      <div id="project-dialog-content">{project && <div data-slot="case-content" className={"p-9.5 [&_h2]:text-[60px] [&_h2]:mb-4.75 max-[560px]:p-6.25 max-[560px]:[&_h2]:text-[43px]"}>
        <p data-slot="eyebrow" className={"type-eyebrow [[data-slot~='case-content']>&]:text-copper [[data-slot~='case-content']>&]:mb-4 [@media_(min-width:801px)]:text-[12px]"}>{project.category}</p><h2 id="dialog-title">{project.title}<span data-slot="copper" className={"text-copper"}>.</span></h2>
        <p data-slot="case-summary" className={"text-[18px] max-w-150 mb-5 max-[560px]:text-[15px]"}>{project.summary}</p><p data-slot="case-note" className={"text-[12px] text-muted p-3.75 [border:1px_solid_var(--line)] mb-7 [@media_(min-width:801px)]:text-[12px]"}>{project.note}</p>
        {project.image && <ProjectBrowser {...project} caseImage/>}
        <section data-slot="case-section" className={"grid grid-cols-[140px_1fr] gap-6 [border-top:1px_solid_var(--line)] p-[24px_0] [&_h3]:text-[18px] [&_h3]:tracking-[-.03em] [&_p]:text-[13px] [&_p]:text-muted [&_p]:leading-[1.7] [&_li]:text-[13px] [&_li]:text-muted [&_li]:leading-[1.7] [&_ul]:m-0 [&_ul]:pl-4.5 [&_li+li]:mt-2.25 max-[560px]:grid-cols-[1fr] max-[560px]:gap-3.5 max-[560px]:[&_h3]:text-[21px]"}><h3>Project focus</h3><ul>{project.focus.map(item => <li key={item}>{item}</li>)}</ul></section>
        <div data-slot="case-actions" className={"flex justify-between gap-6.25 [border-top:1px_solid_var(--line)] pt-6.25 flex-wrap"}><button data-slot="text-link case-contact" className={"inline-flex items-center gap-6.25 min-h-11 text-[12px] border-0 border-b border-line [background:transparent] p-[8px_0] [transition:color_.2s,border-color_.2s] [&_span]:text-[20px] hover:text-copper hover:border-copper [@media_(min-width:801px)]:text-[12px]"} onClick={openContact}>Discuss related work <span aria-hidden="true">↗</span></button><button data-slot="text-link case-return" className={"inline-flex items-center gap-6.25 min-h-11 text-[12px] border-0 border-b border-line [background:transparent] p-[8px_0] [transition:color_.2s,border-color_.2s] [&_span]:text-[20px] hover:text-copper hover:border-copper [@media_(min-width:801px)]:text-[12px]"} onClick={closeDialog}>Back to work <span aria-hidden="true">×</span></button></div>
      </div>}</div>
    </dialog>
    <dialog id="contact-dialog" ref={contactRef} aria-labelledby="contact-dialog-title" onCancel={closeDialog} onClose={() => { if (dialog?.type === "contact")
        closeDialog(); }} onClick={event => closeOnBackdrop(event, closeDialog)}>
      <DialogTop label="Close contact details" close={closeDialog}>LET’S CONNECT</DialogTop>
      <div data-slot="contact-dialog-content" className={"p-10 [&_h2]:text-[40px] [&_h2]:leading-[1.1] [&_h2]:mb-6.25 [&>p:not([data-slot~='eyebrow']):not([data-slot~='copy-status'])]:text-muted [&>p:not([data-slot~='eyebrow']):not([data-slot~='copy-status'])]:text-[14px] [&>p:not([data-slot~='eyebrow']):not([data-slot~='copy-status'])]:max-w-125 max-[560px]:p-6.25 max-[560px]:[&_h2]:text-[31px] max-[560px]:[&>p:not([data-slot~='eyebrow']):not([data-slot~='copy-status'])]:text-[13px]"}><p data-slot="eyebrow" className={"type-eyebrow [[data-slot~='contact-dialog-content']>&]:text-copper [[data-slot~='contact-dialog-content']>&]:mb-5.5 [@media_(min-width:801px)]:text-[12px]"}>CONTACT / OPEN TO OPPORTUNITIES</p><h2 id="contact-dialog-title">A new conversation.<br />A clearer direction.</h2><p>Tell me about the project or role, and where you need help.</p>
        <div data-slot="contact-email-row" className={"flex items-center flex-wrap gap-[16px_24px] m-[28px_0_0] max-[560px]:gap-[16px_20px] max-[560px]:mt-6"}><a data-slot="placeholder-address contact-address" className={"[font:500_clamp(16px,3vw,27px)_var(--display)] tracking-[-.03em] m-[28px_0] [overflow-wrap:anywhere] inline-block [transition:color_.2s] hover:text-copper [[data-slot~='contact-email-row']_&]:m-0 [[data-slot~='contact-email-row']_&]:min-w-0 [[data-slot~='contact-email-row']_&]:max-w-[100%] [[data-slot~='contact-email-row']_&]:leading-[1.4] max-[560px]:[[data-slot~='contact-email-row']_&]:text-[18px]"} href="mailto:iamronnydas@gmail.com">iamronnydas@gmail.com <span aria-hidden="true">↗</span></a><button data-slot="copy-email-button" className={"[display:inline-grid] [place-items:center] [flex:0_0_48px] w-12 h-12 p-3 [border:1px_solid_var(--line)] rounded-[6px] bg-surface text-ink [transition:background-color_.2s,border-color_.2s,color_.2s] hover:[border-color:var(--copper)] hover:text-copper hover:bg-soft [&_svg]:w-5.5 [&_svg]:h-5.5 [&_svg]:[fill:none] [&_svg]:[stroke:currentColor] [&_svg]:[stroke-width:1.7] [&_svg]:[stroke-linecap:round] [&_svg]:[stroke-linejoin:round] [&[data-copied=true]]:text-copper [&[data-copied=true]]:[border-color:var(--copper)] max-[560px]:[flex-basis:44px] max-[560px]:w-11 max-[560px]:h-11 max-[560px]:p-2.5"} id="copy-email" data-copied={copied ? "true" : undefined} aria-label={copied ? "Email address copied. Copy again" : "Copy email address"} title={copied ? "Copied" : "Copy email address"} onClick={copyEmail}><svg data-slot="copy-icon" className={"[[data-slot~='copy-email-button'][data-copied=true]_&]:hidden"} viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/></svg><svg data-slot="copied-icon" className={"[[data-slot~='copy-email-button']_&]:hidden [[data-slot~='copy-email-button'][data-copied=true]_&]:block"} viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg></button></div>
        <p id="copy-status" data-slot="copy-status" className={"text-[12px] min-h-7.5 text-muted mt-3.25 [@media_(min-width:801px)]:text-[12px]"} role="status">{copyStatus}</p><a data-slot="text-link" className={"inline-flex items-center gap-6.25 min-h-11 text-[12px] border-0 border-b border-line [background:transparent] p-[8px_0] [transition:color_.2s,border-color_.2s] [&_span]:text-[20px] hover:text-copper hover:border-copper [@media_(min-width:801px)]:text-[12px]"} href="/assets/ronny-das-portfolio-profile.html" download="Ronny-Das-Portfolio-Profile.html">Download portfolio profile <span aria-hidden="true">↓</span></a>
      </div>
    </dialog>
  </>;
}
