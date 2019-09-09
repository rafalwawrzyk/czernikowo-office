import styled, {keyframes} from 'styled-components'


export const Navigation = styled.nav`
		width: 100%;
	position: relative;
	height: 50px;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 200;
	background-color:#fff;
	border-bottom:1px solid #FF6734;
	@media screen and (min-width:900px) {
		position: static;
		height: 100%;
		display: flex;
		align-items: center;
		border-bottom:none;
	}
`

export const NavList = styled.div`
	width: 100%;
	/* height: 100vh; */
	text-align: center;
	margin: 0;
	padding: 0;
	position: absolute;
	top: 50%;
	transform: translate(0, -50%);
	opacity: 0;
	display:none;
	ul{
		margin-left:auto;
		margin-right:auto;
	}
	@media screen and (min-width:900px) {
		opacity: 1 !important;
		visibility:visible !important;
		top: 0;
		transform: none;
		position: static;
		display:block !important;
		-webkit-transform: none;
		-moz-transform: none;
		-ms-transform: none;
		-o-transform: none;
		ul{
			margin-left:0;
			margin-right:0;
		}
	}
	ul {
		list-style-type: none;
    padding: 0;
		@media screen and (min-width:900px) {
      display: flex;
			justify-content: space-between;
			width: 400px;

		}
		li {
			width: 100%;
			@media screen and (min-width:900px) {
				left: 0;
				width: auto;
        position: relative;
        text-align: center;
				
			}
		}
	}
`

export const Hamburger = styled.div`
	width: 30px;
	height: 45px;
	display: flex;
	position: relative;
	margin-left: 10px;
	z-index: 300;
	@media screen and (min-width:900px) {
		display: none;
	}
`

export const Line = styled.div`
		height: 2px;
	background-color: #ff6734;
	width: 100%;
	position: absolute;
	transform: translate(-50%, -50%);
`

export const Line1 = styled(Line)`
		top: 30%;
		left: 50%;
`

export const Line2 = styled(Line)`
		top: 50%;
		left: 50%;
`

export const Line3 = styled(Line)`
		top: 70%;
		left: 50%;
`

export const Linked = styled.li`
		text-decoration: none;
	position: relative;
	left: 0;
`
const AnimeLines = keyframes`
	from{
    opacity:0;
    transform:translateY(-10px)
  }
  to{
    opacity:1;
    transform:translateY(0px)
  }
`

const AnimeLines2 = keyframes`
	from{
    opacity:0;
    transform:translateY(10px)
  }
  to{
    opacity:1;
    transform:translateY(0px)
  }
`

export const NavItem = styled.a`
	text-decoration: none;
	color: #fff;
	text-transform: uppercase;
	width: 100%;
	display: block;
	padding: 10px 0;
	font-size: 30px;
	-webkit-backface-visibility: hidden;

	@media screen and (min-width:900px) {
		padding: none;
		color: #525252;
		font-size: 16px;
		&::before {
			content: '';
			display: block;
			width: 100%;
			height: 2px;
			background-color: #ff6734;
			top: 0;
			opacity: 0;
			position: absolute
		}

		&::after {
			content: '';
			display: block;
			width: 100%;
			height: 2px;
			background-color: #ff6734;
			bottom: 0;
			opacity: 0;
			position: absolute;
		}

		&:hover {
			cursor:pointer;
			&::after {
				animation-name: ${AnimeLines};
				animation-duration: 300ms;
				animation-timing-function: ease-in-out;
				animation-fill-mode: both;
			}
			&::before {
				animation-name: ${AnimeLines2};
				animation-duration: 300ms;
				animation-timing-function: ease-in-out;
				animation-fill-mode: both;
			}
		}
	}
`