const date = new Date().getFullYear();

const Cright = () => {
    return (
        <div className="py-2 bg-[#131313] text-sm text-center">
            <span>© {date} All rights reserved.</span>
        </div>
    )
}

export default Cright