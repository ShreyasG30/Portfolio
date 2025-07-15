import { Briefcase, Code, User } from "lucide-react";
import { useState } from "react";

const certificates = [
	{ key: "M", label: "MK4", file: `${import.meta.env.BASE_URL}Experience_Letters/Mekano4.pdf` },
	{ key: "CS", label: "CSolar", file: `${import.meta.env.BASE_URL}Experience_Letters/CSolar.pdf` },
	{ key: "F", label: "Faurecia (Forvia)", file: `${import.meta.env.BASE_URL}Experience_Letters/Forvia.pdf` },
	{
		key: "C",
		label: "Copes tech India Pvt Ltd",
		file: `${import.meta.env.BASE_URL}Experience_Letters/Copes.pdf`,
	},
	{ key: "B", label: "BHEL", file: `${import.meta.env.BASE_URL}Experience_Letters/BHEL.pdf` },
	{
		key: "T",
		label: "Triveni Gears",
		file: `${import.meta.env.BASE_URL}Experience_Letters/Triveni_Gears.pdf`,
	},
];

export const AboutSection = () => {
	const [modal, setModal] = useState({ open: false, file: null, label: "" });

	const openModal = (file, label) => setModal({ open: true, file, label });
	const closeModal = () => setModal({ open: false, file: null, label: "" });

	return (
		<section id="about" className="py-24 px-4 relative">
			<div className="max-w-screen-xl mx-auto w-full">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
					About <span className="text-primary">Me</span>
				</h2>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
					{/* LEFT COLUMN — STAY CENTERED */}
					<div className="space-y-6 text-center">
						<h3 className="text-2xl font-semibold">
							Passionate Engineer & Problem Solver
						</h3>

						<p className="text-muted-foreground">
							I’m a mechanical engineer with strong foundations in CAD, FEM, and
							CFD. I specialize in building robust engineering solutions using
							simulation and modeling tools.
						</p>

						<p className="text-muted-foreground">
							My passion lies in solving complex real-world problems and learning
							new technologies to improve efficiency and innovation.
						</p>

						{/* FIX BUTTON ALIGNMENT */}
						<div className="flex flex-col sm:flex-row sm:justify-center items-center gap-4 pt-6">
							<a
								href="#contact"
								className="cosmic-button w-full sm:w-auto text-center"
							>
								Get In Touch
							</a>
							<a
								href="/Portfolio/docs/Shreyas_Girish.pdf"
								download="Shreyas_Girish_CV.pdf"
								className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 w-full sm:w-auto text-center"
							>
								Download CV
							</a>
						</div>
					</div>

					{/* RIGHT COLUMN — ALIGN LEFT */}
					<div className="grid grid-cols-1 gap-6 text-left">
						<div className="gradient-border p-6 card-hover rounded-xl">
							<div className="flex items-start gap-4">
								<div className="p-3 rounded-full bg-primary/10">
									<Code className="h-6 w-6 text-primary" />
								</div>
								<div>
									<h4 className="text-lg font-semibold">
										Engineering Simulations
									</h4>
									<p className="text-muted-foreground">
										I create high-fidelity simulations using tools like ANSYS,
										OpenFOAM, and KratosMultiphysics.
									</p>
								</div>
							</div>
						</div>

						<div className="gradient-border p-6 card-hover rounded-xl">
							<div className="flex items-start gap-4">
								<div className="p-3 rounded-full bg-primary/10">
									<User className="h-6 w-6 text-primary" />
								</div>
								<div>
									<h4 className="text-lg font-semibold">CAD & Modeling</h4>
									<p className="text-muted-foreground">
										I design and analyze mechanical components using SolidWorks,
										CATIA, and SpaceClaim.
									</p>
								</div>
							</div>
						</div>

						<div className="gradient-border p-6 card-hover rounded-xl">
							<div className="flex items-start gap-4">
								<div className="p-3 rounded-full bg-primary/10">
									<Briefcase className="h-6 w-6 text-primary" />
								</div>
								<div>
									<h4 className="text-lg font-semibold">Project Experience</h4>
									<p className="text-muted-foreground">
										Hands-on experience across automotive, renewable energy, and
										civil engineering projects.
									</p>
									{/* Certificate Buttons */}
									<div className="flex flex-wrap gap-2 mt-4">
										{certificates.map((cert) => (
											<button
												key={cert.key}
												className="px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold opacity-70 border border-primary/30 shadow-none hover:opacity-100 transition"
												title={cert.label}
												onClick={() => openModal(cert.file, cert.label)}
												style={{ letterSpacing: "0.5px" }}
											>
												{cert.label}
											</button>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Modal for PDF certificate */}
			{modal.open && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
					onClick={closeModal}
				>
					<div
						className="bg-white rounded-lg shadow-xl max-w-3xl w-full p-4 relative"
						onClick={(e) => e.stopPropagation()}
					>
						<div className="flex justify-between items-center mb-2">
							<span className="font-bold text-lg">
								{modal.label} Certificate
							</span>
							<button
								className="text-primary font-bold text-xl px-2"
								onClick={closeModal}
								aria-label="Close"
							>
								×
							</button>
						</div>
						<div className="w-full h-[70vh]">
							<iframe
								src={modal.file}
								title={modal.label}
								className="w-full h-full rounded"
								frameBorder="0"
							/>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};
