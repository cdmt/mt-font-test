export function WeightSample({ fontName, name }: { fontName: string; name: string }) {
    return (
        <>
            <div className={`font-${name.toLowerCase()} typeBlock`}>
                <h2>{fontName} {name}</h2>
                <div>
                    <div className="font-size-30">
                        <p  className="font-upper">
                            abcdefghijklmnopqrstuvwxyz
                        </p>
                        <p>
                            abcdefghijklmnopqrstuvwxyz
                        </p>
                        <p className="smallCaps">
                            abcdefghijklmnopqrstuvwxyz                   
                        </p>
                        <p>
                            0123456789
                        </p>
                        <p className="oldStyle">
                            0123456789                    
                        </p>
                    </div>
                    <p className="font-size-30">
                        The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens                    
                    </p>
                    <p className="font-size-20">
                        The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens                    
                    </p>
                    <p className="font-size-16">
                        The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens                    
                    </p>
                </div>
            </div>
        </>
    )
}