<script lang="ts">
	type RotateDirection = "up" | "down" | "left" | "right";
	type Props = {
		rotate?: RotateDirection;
		onClick?: () => void;
	};

	let { rotate, onClick }: Props = $props();

	const getRotateDirection = (r: RotateDirection) => {
		switch (r) {
			case "up":
				return "rotate-270";
			case "down":
				return "rotate-90";
			case "left":
				return "rotate-180";
			case "right":
				return "";
		}
	};

	let className = $derived(`mt-1 ${rotate ? getRotateDirection(rotate) : ""}`);

	const handleClick = onClick ?? (() => {});
</script>

<div class={className} aria-label={`Toggle Menu`}>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="16"
		height="16"
		fill="currentColor"
		class="bi bi-chevron-right"
		viewBox="0 0 16 16">
		<path
			fill-rule="evenodd"
			d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
	</svg>
</div>
