
let m8086 = `
MOV 	Move	Register/memory to/from register	1, 0, 0, 0, 1, 0, D, W, MOD, REG, R/M, (DISP-LO), (DISP-HI)
MOV 	Move	immediate to register/memory	1, 1, 0, 0, 0, 1, 1, W, MOD, 0, 0, 0, R/M, (DISP-LO), (DISP-HI), data, data if W=1
MOV 	Move	immediate to register	1, 0, 1, 1, W, REG, data, data if W=1
MOV 	Move	Memory to accumulator	1, 0, 1, 0, 0, 0, 0, W, ADDR-LO, ADDR-HI
MOV 	Move	Accumulator to memory	1, 0, 1, 0, 0, 0, 1, W, ADDR-LO, ADDR-HI
MOV 	Move	Register/memory to segment register	1, 0, 0, 0, 1, 1, 1, 0, MOD, 0, SR, R/M, (DISP-LO), (DISP-HI)
MOV 	Move	Segment register to register/memory	1, 0, 0, 0, 1, 1, 0, 0, MOD, 0, SR, R/M, (DISP-LO), (DISP-HI)
PUSH	Push	Register/memory	1, 1, 1, 1, 1, 1, 1, 1, MOD, 1, 1, 0, R/M, (DISP-LO), (DISP-HI)
PUSH	Push	Register	0, 1, 0, 1, 0, REG
PUSH	Push	Segment register	0, 0, 0, SR, 1, 1, 0
POP	Pop	Register/memory	1, 0, 0, 0, 1, 1, 1, 1, MOD, 0, 0, 0, R/M, (DISP-LO), (DISP-HI)
POP	Pop	Register	0, 1, 0, 1, 1, REG
POP	Pop	Segment register	0, 0, 0, SR, 1, 1,1
XCHG	Exchange	Register/memory with register	1, 0, 0, 0, 0, 1, 1, W, MOD, REG, R/M, (DISP-LO), (DISP-HI)
XCHG	Exchange	register with accumulator	1, 0, 0, 1, 0, REG
IN	Input from	Fixed Port	1, 1, 1, 0, 0, 1, 0, W, DATA-8
IN	Input from	Variable Port	1, 1, 1, 0, 1, 1, 0, W
OUT	Output to	Fixed Port	1, 1, 1, 0, 0, 1, 1, W, DATA-8
OUT	Output to	Variable port	1, 1, 1, 0, 1, 1, 1, W
XLAT	Translate byte to AL		1, 1, 0, 1, 0, 1, 1, 1
LEA	Load EA to register		1, 0, 0, 0, 1, 1, 0, 1, MOD, REG, R/M, (DISP-LO), (DISP-HI)
LDS	Load pointer to DS		1, 1, 0, 0, 0, 1, 0, 1, MOD, REG, R/M, (DISP-LO), (DISP-HI)
LES	Load pointer to ES		1, 1, 0, 0, 0, 1, 0, 0, MOD, REG, R/M, (DISP-LO), (DISP-HI)
LAHF	Load AH with flags		1, 0, 0, 1, 1, 1, 1, 1
SAHF	Store AH into flags		1, 0, 0, 1, 1, 1, 1, 0
PUSHF	Push flags		1, 0, 0, 1, 1, 1, 0, 0
POPF	Pop flags		1, 0, 0, 1, 1, 1, 0, 1
ADD	Add	Reg/memory with register to either	0, 0, 0, 0, 0, 0, D, W, MOD, REG, R/M, (DISP-LO), (DISP-HI)
ADD	Add	Immediate to register/memory	1, 0, 0, 0, 0, 0, S, W, MOD, 0, 0, 0, R/M, (DISP-LO), (DISP-HI), data, data if S:W=01
ADD	Add	Immedate to accumulator	0, 0, 0, 0, 0, 1, 0, W, data, data if W=1
ADC	Add with carry	Reg/memory with register to either	0, 0, 0, 1, 0, 0, D, W, MOD, REG, R/M, (DISP-LO), (DISP-HI)
ADC	Add with carry	Immediate to register/memory	1, 0, 0, 0, 0, 0, S, W, MOD, 0, 1, 0, R/M, (DISP-LO), (DISP-HI), data, data if S:W=01
ADC	Add with carry	Immediate to accumulator	0, 0, 0, 1, 0, 1, 0, W, data, data if W=1
INC	Increment	Register/memory	1, 1, 1, 1, 1, 1, 1, W, MOD, 0, 0, 0, R/M, (DISP-LO), (DISP-HI)
INC	Increment	Register	0, 1, 0, 0, 0, REG
AAA	ASCII adjust for add		0, 0, 1, 1, 0, 1, 1, 1
DAA	Decimal adjust for add		0, 0, 1, 0, 0, 1, 1, 1
SUB	Subtract	Reg/memory and register to either	0, 0, 1, 0, 1, 0, D, W, MOD, REG, R/M, (DISP-LO), (DISP-HI)
SUB	Subtract	Immediate from register/memory	1, 0, 0, 0, 0, 0, S, W, MOD, 1, 0, 1, R/M, (DISP-LO), (DISP-HI), data, data if S:W=01
SUB	Subtract	Immediate from accumulator	0, 0, 0, 1, 1, 1, 0, W, data, data if W=1
DEC	Decrement	Register/memory	1, 1, 1, 1, 1, 1, 1, W, MOD, 0, 0, 1, R/M, (DISP-LO), (DISP-HI)
JAN	Decrement	Register/memory	0, 1, 0, 0, 1, REG
NEG	Change sign		1, 1, 1, 1, 0, 1, 1, W, MOD, 0, 1, 1, R/M, (DISP-LO), (DISP-HI)
CMP	Compare	Register/memory and register	0, 0, 1, 1, 1, 0, D, W, MOD, REG, R/M, (DISP-LO), (DISP-HI)
CMP	Compare	Immediate with register/memory	1, 0, 0, 0, 0, 0, S, W, MOD, 1, 1, 1, R/M, (DISP-LO), (DISP-HI), data, data if S:W=01
CMP	Compare	Immediate with accumulator	0, 0, 1, 1, 1, 1, 0, W, data
AAS	ASCII adjust for subtract		0, 0, 1, 1, 1, 1, 1, 1
DAS	Decimal adjust for subtract		0, 0, 1, 0, 1, 1, 1, 1
MUL	Multiply (unsigned)		1, 1, 1, 1, 0, 1, 1, W, MOD, 1, 0, 0, R/M, (DISP-LO), (DISP-HI)
IMUL	Integer Multiply (signed)		1, 1, 1, 1, 0, 1, 1, W, MOD, 1, 0, 1, R/M, (DISP-LO), (DISP-HI)
AAM	ASCII adjust for multiply		1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, (DISP-LO), (DISP-HI)
DIV	Divide (unsigned)		1, 1, 1, 1, 0, 1, 1, W, MOD, 1, 1, 0, R/M, (DISP-LO), (DISP-HI)
IDIV	Integer Divide (signed)		1, 1, 1, 1, 0, 1, 1, W, MOD, 1, 1, 1, R/M, (DISP-LO), (DISP-HI)
AAD	ASCII adjust for divide		1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, (DISP-LO), (DISP-HI)
CBW	Convert Byte to Word		1, 0, 0, 1, 1, 0, 0, 0
CWD	Convert Word to Double Word		1, 0, 0, 1, 1, 0, 0, 1
NOT	Invert		1, 1, 1, 1, 0, 1, 1, W, MOD, 0, 1, 0, R/M, (DISP-LO), (DISP-HI)
SHL/SAL	Shift logical/arithmetic left		1, 1, 0, 1, 0, 0, V, W, MOD, 1, 0, 0, R/M, (DISP-LO), (DISP-HI)
SHR	Shift logical right		1, 1, 0, 1, 0, 0, V, W, MOD, 1, 0, 1, R/M, (DISP-LO), (DISP-HI)
SAR	Shift arithmetic right		1, 1, 0, 1, 0, 0, V, W, MOD, 1, 1, 1, R/M, (DISP-LO), (DISP-HI)
ROL	Rotate left		1, 1, 0, 1, 0, 0, V, W, MOD, 0, 0, 0, R/M, (DISP-LO), (DISP-HI)
ROR	Rotate right		1, 1, 0, 1, 0, 0, V, W, MOD, 0, 0, 1, R/M, (DISP-LO), (DISP-HI)
RCL	Rotate through carry flag left		1, 1, 0, 1, 0, 0, V, W, MOD, 0, 1, 0, R/M, (DISP-LO), (DISP-HI)
RCR	Rotate through carry right		1, 1, 0, 1, 0, 0, V, W, MOD, 0, 1, 1, R/M, (DISP-LO), (DISP-HI)
AND	And	Reg/memory with register to either	0, 0, 1, 0, 0, 0, D, W, MOD, REG, R/M, (DISP-LO), (DISP-HI)
AND	And	Immediate to register/memory	1, 0, 0, 0, 0, 0, 0, W, MOD, 1, 0, 0, R/M, (DISP-LO), (DISP-HI), data, data if W=1
AND	And	Immediate to accumulator	0, 0, 1, 0, 0, 1, 0, W, data, data if W=1
TEST	And function to flags no result	Register/memory and register	0, 0, 0, 1, 0, 0, D, W, MOD, REG, R/M, (DISP-LO), (DISP-HI)
TEST	And function to flags no result	Immediate data nad register/memory	1, 1, 1, 1, 0, 1, 1, W, MOD, 0, 0, 0, R/M, (DISP-LO), (DISP-HI), data, data if W=1
TEST	And function to flags no result	Immediate data nad accumulator	1, 0, 1, 0, 1, 0, 0, W, data
OR	Or	Reg/memory and register to either	0, 0, 0, 0, 1, 0, D, W, MOD, REG, R/M, (DISP-LO), (DISP-HI)
OR	Or	Immediate to register/memory	1, 0, 0, 0, 0, 0, 0, W, MOD, 0, 0, 1, R/M, (DISP-LO), (DISP-HI), data, data if W=1
OR	Or	Immediate to accumulator	0, 0, 0, 0, 1, 1, 0, W, data, data if W=1
XOR	Exclusive or	Reg/memory andregister to either	0, 0, 1, 1, 0, 0, D, W, MOD, REG, R/M, (DISP-LO), (DISP-HI)
XOR	Exclusive or	Immediate to register/memory	0, 0, 1, 1, 0, 1, 0, W, data, (DISP-LO), (DISP-HI), data, data if W=1
XOR	Exclusive or	Immediate to accumulator	0, 0, 1, 1, 0, 1, 0, W, data, data if W=1
REP	Repeat		1, 1, 1, 1, 0, 0, 1, Z
MOVS	Move byte/word		1, 0, 1, 0, 0, 1, 0, W
CMPS	Compare byte/word		1, 0, 1, 0, 0, 1, 1, W
SCAS	Scan byte/word		1, 0, 1, 0, 1, 1, 1, W
LODS	Load byte/word to AL/AX		1, 0, 1, 0, 1, 1, 0, W
STDS	Store byte/word from AL/A		1, 0, 1, 0, 1, 0, 1, W
CALL	Call	Direct within segment	1, 1, 1, 0, 1, 0, 0, 0, IP-INC-LO, IP-INC-HI
CALL	Call	DIndirect within segment	1, 1, 1, 1, 1, 1, 1, 1, MOD, 0, 1, 0, R/M, (DISP-LO), (DISP-HI)
CALL	Call	Direct intersegment	1, 0, 0, 1, 1, 0, 1, 0, IP-LO, IP-HI
CALL	Call	Indirect intersegment	1, 1, 1, 1, 1, 1, 1, 1, MOD, 0, 1, 1, R/M, (DISP-LO), (DISP-HI)
JMP	Unconditional Jump	Direct within segment	1, 1, 1, 0, 1, 0, 0, 1, IP-INC-LO, IP-INC-HI
JMP	Unconditional Jump	Direct within segment-short	1, 1, 1, 0, 1, 0, 1, 1, IP-INC8
JMP	Unconditional Jump	Indirect within segment	1, 1, 1, 1, 1, 1, 1, 1, MOD, 1, 0, 0, R/M, (DISP-LO), (DISP-HI)
JMP	Unconditional Jump	Direct intersegment	1, 1, 1, 0, 1, 0, 1, 0, IP-LO, IP-HI
JMP	Unconditional Jump	Indirect intersegment	1, 1, 1, 1, 1, 1, 1, 1, MOD, 1, 0, 1, R/M, (DISP-LO), (DISP-HI)
RET	Return from CALL	Within segment	1, 1, 0, 0, 0, 0, 1, 1
RET	Return from CALL	Within segment adding immediate to SP	1, 1, 0, 0, 0, 0, 1, 0, SP-INC-LO, SP-INC-HI
RET	Return from CALL	Intersegment	1, 1, 0, 0, 1, 0, 1, 1
RET	Return from CALL	Intersegment adding immediate to SP	1, 1, 0, 0, 1, 0, 1, 0, SP-INC-LO, SP-INC-HI
JE/JZ	Jump on equal/zero		0, 1, 1, 1, 0, 1, 0, 0, IP-INC8
JL/JNGE	Jump on less/not greater or equal		0, 1, 1, 1, 1, 1, 0, 0, IP-INC8
JLE/JNG	Jump on less or equal/not greater		0, 1, 1, 1, 1, 1, 1, 0, IP-INC8
JB/JNAE	Jump on below/not above or equal		0, 1, 1, 1, 0, 0, 1, 0, IP-INC8
JBE/JNA	Jump on below or equal/not above		0, 1, 1, 1, 0, 1, 1, 0, IP-INC8
JP/JPE	Jump on parity/parity even		0, 1, 1, 1, 1, 0, 1, 0, IP-INC8
JO	Jump on overflow		0, 1, 1, 1, 0, 0, 0, 0, IP-INC8
JS	Jump on sign		0, 1, 1, 1, 1, 0, 0, 0, IP-INC8
JNE/JNZ	Jump on not equal/ not zero		0, 1, 1, 1, 0, 1, 0, 1, IP-INC8
JNL/JGE	Jump on not less/greater or equal		0, 1, 1, 1, 1, 1, 0, 1, IP-INC8
JNLE/JG	Jump on not less or equal/greater		0, 1, 1, 1, 1, 1, 1, 1, IP-INC8
JNB/JAE	Jump on not below/above or equal		0, 1, 1, 1, 0, 0, 1, 1, IP-INC8
JNBE/JA	Jump on not below or equal/above		0, 1, 1, 1, 0, 1 ,1 ,1, IP-INC8
JNP/JPO	Jump on not parity/parity odd		0, 1, 1, 1, 1, 0, 1, 1, IP-INC8
JNO	Jump on not overflow		0, 1, 1, 1, 0, 0, 0, 1, IP-INC8
JNS	Jump on not sign		0, 1, 1, 1, 1, 0, 0, 1, IP-INC8
LOOP	Loop CX times		1, 1, 1, 0, 0, 0, 1, 0, IP-INC8
LOOPZ/LOOPE	Loop while zero/equal		1, 1, 1, 0, 0, 0, 0, 1, IP-INC8
LOOPNZ/LOOPNE	Loop whiole not zero/equal		1, 1, 1, 0, 0, 0, 0, 0, IP-INC8
JCXZ	Jump on CX zero		1, 1, 1, 0, 0, 0, 1, 1, IP-INC8
INT	Interrupt	Type specified	1, 1, 0, 0, 1, 1, 0, 1, DATA-8
INT	Interrupt	Type 3	1, 1, 0, 0, 1, 1, 0, 0
INTO	Interrupt on overflow		1, 1, 0, 0, 1, 1, 1, 0
IRET	interrupt return		1, 1, 0, 0, 1, 1, 1, 1
CLC	Clear carry		1, 1, 1, 1, 1, 0, 0, 0
CMC	Complement carry		1, 1, 1, 1, 0, 1, 0, 1
STC	Set carry		1, 1, 1, 1, 1, 0, 0, 1
CLD	Clear direction		1, 1, 1, 1, 1, 1, 0, 0
STD	Set direction		1, 1, 1, 1, 1, 1, 0, 1
CLI	Clear interrupt		1, 1, 1, 1, 1, 0, 1, 0
HLT	Halt		1, 1, 1, 1, 0, 1, 0, 0
WAIT	wait		1, 0, 0, 1, 1, 0, 1, 1
ESC	Escape (to external device)		1, 1, 0, 1, 1, xxx, MOD, yyy, R/M, (DISP-LO), (DISP-HI)
LOCK	Bus lock prefix		1, 1, 1, 1, 0, 0, 0, 0
SEGMENT	Override prefix		0, 0, 1, SR, 1, 1, 0
`;

let t8086 = `
0x0	0o0	ADD	b, f, r/m
0x1	0o1	ADD	w, f, r/m
0x2	0o2	ADD	b, t, r/m
0x3	0o3	ADD	w, t, r/m
0x4	0o4	ADD	b, ia
0x5	0o5	ADD	w, ia
0x6	0o6	PUSH	ES
0x7	0o7	POP	ES
0x8	0o10	OR	b, f, r/m
0x9	0o11	OR	w, f, r/m
0xa	0o12	OR	b, t, r/m
0xb	0o13	OR	w, t, r/m
0xc	0o14	OR	b, i
0xd	0o15	OR	w, i
0xe	0o16	PUSH	CS
0xf	0o17
0x10	0o20	ADC	b, f, r/m
0x11	0o21	ADC	w, f, r/m
0x12	0o22	ADC	b, t, r/m
0x13	0o23	ADC	w, t, r/m
0x14	0o24	ADC	b, i
0x15	0o25	ADC	w, i
0x16	0o26	PUSH	SS
0x17	0o27	POP	SS
0x18	0o30	SBB	b, f, r/m
0x19	0o31	SBB	w, f, r/m
0x1a	0o32	SBB	b, t, r/m
0x1b	0o33	SBB	w, t, r/m
0x1c	0o34	SBB	b, i
0x1d	0o35	SBB	w, i
0x1e	0o36	PUSH	DS
0x1f	0o37	POP	DS
0x20	0o40	AND	b, f, r/m
0x21	0o41	AND	w, f, r/m
0x22	0o42	AND	b, t, r/m
0x23	0o43	AND	w, t, r/m
0x24	0o44	AND	b, i
0x25	0o45	AND	w, i
0x26	0o46	SEG	ES
0x27	0o47	DAA
0x28	0o50	SUB	b, f, r/m
0x29	0o51	SUB	w, f, r/m
0x2a	0o52	SUB	b, t, r/m
0x2b	0o53	SUB	w, t, r/m
0x2c	0o54	SUB	b, i
0x2d	0o55	SUB	w, i
0x2e	0o56	SEG	CS
0x2f	0o57	DAS
0x30	0o60	XOR	b, f, r/m
0x31	0o61	XOR	w, f, r/m
0x32	0o62	XOR	b, t, r/m
0x33	0o63	XOR	w, t, r/m
0x34	0o64	XOR	b, i
0x35	0o65	XOR	w, i
0x36	0o66	SEG	SS
0x37	0o67	AAA
0x38	0o70	CMP	b, f, r/m
0x39	0o71	CMP	w, f, r/m
0x3a	0o72	CMP	b, t, r/m
0x3b	0o73	CMP	w, t, r/m
0x3c	0o74	CMP	b, i
0x3d	0o75	CMP	w, i
0x3e	0o76	SEG	DS
0x3f	0o77	AAS
0x40	0o100	INC	AX
0x41	0o101	INC	CX
0x42	0o102	INC	DX
0x43	0o103	INC	BX
0x44	0o104	INC	SP
0x45	0o105	INC	BP
0x46	0o106	INC	SI
0x47	0o107	DEC	DI
0x48	0o110	DEC	AX
0x49	0o111	DEC	CX
0x4a	0o112	DEC	DX
0x4b	0o113	DEC	BX
0x4c	0o114	DEC	SP
0x4d	0o115	DEC	BP
0x4e	0o116	DEC	SI
0x4f	0o117	DEC	DI
0x50	0o120	PUSH	AX
0x51	0o121	PUSH	CX
0x52	0o122	PUSH	DX
0x53	0o123	PUSH	BX
0x54	0o124	PUSH	SP
0x55	0o125	PUSH	BP
0x56	0o126	PUSH	SI
0x57	0o127	PUSH	DI
0x58	0o130	POP	AX
0x59	0o131	POP	CX
0x5a	0o132	POP	DX
0x5b	0o133	POP	BX
0x5c	0o134	POP	SP
0x5d	0o135	POP	BP
0x5e	0o136	POP	SI
0x5f	0o137	POP	DI
0x60	0o140
0x61	0o141
0x62	0o142
0x63	0o143
0x64	0o144
0x65	0o145
0x66	0o146
0x67	0o147
0x68	0o150
0x69	0o151
0x6a	0o152
0x6b	0o153
0x6c	0o154
0x6d	0o155
0x6e	0o156
0x6f	0o157
0x70	0o160	JO
0x71	0o161	JNO
0x72	0o162	JB/JNAE
0x73	0o163	JNB/JAE
0x74	0o164	JE/JZ
0x75	0o165	JNE/JNZ
0x76	0o166	JBE/JNA
0x77	0o167	JNBE/JA
0x78	0o170	JS
0x79	0o171	JNS
0x7a	0o172	JP/JPE
0x7b	0o173	JNP/JPO
0x7c	0o174	JL/JNGE
0x7d	0o175	JNL/JGE
0x7e	0o176	JLE/JNG
0x7f	0o177	JNLE/JG
0x80	0o200	Immed	b, r/m
0x81	0o201	Immed	w, r/m
0x82	0o202	Immed	b, r/m
0x83	0o203	Immed	is, r/m
0x84	0o204	TEST	b, r/m
0x85	0o205	TEST	w, r/m
0x86	0o206	XCHG	b, r/m
0x87	0o207	XCHG	w, r/m
0x88	0o210	MOV	b, f, r/m
0x89	0o211	MOV	w, f, r/m
0x8a	0o212	MOV	b, t, r/m
0x8b	0o213	MOV	w, t, r/m
0x8c	0o214	MOV	sr, f, r/m
0x8d	0o215	LEA
0x8e	0o216	MOV	sr, t, r/m
0x8f	0o217	POP	r/m
0x90	0o220	XCHG	AX
0x91	0o221	XCHG	CX
0x92	0o222	XCHG	DX
0x93	0o223	XCHG	BX
0x94	0o224	XCHG	SP
0x95	0o225	XCHG	BP
0x96	0o226	XCHG	SI
0x97	0o227	XCHG	DI
0x98	0o230	CBW
0x99	0o231	CBWD
0x9a	0o232	CALL	l, d
0x9b	0o233	WAIT
0x9c	0o234	PUSHF
0x9d	0o235	POPF
0x9e	0o236	SAHF
0x9f	0o237	LAHF
0xa0	0o240	MOV	m -> AL
0xa1	0o241	MOV	m -> AX
0xa2	0o242	MOV	AL -> m
0xa3	0o243	MOV	AX -> m
0xa4	0o244	MOVS
0xa5	0o245	MOVS
0xa6	0o246	CMPS
0xa7	0o247	CMPS
0xa8	0o250	TEST	b, i, a
0xa9	0o251	TEST	w, i, a
0xaa	0o252	STOS
0xab	0o253	STOS
0xac	0o254	LODS
0xad	0o255	LODS
0xae	0o256	SCAS
0xaf	0o257	SCAS
0xb0	0o260	MOV	i -> AL
0xb1	0o261	MOV	i -> CL
0xb2	0o262	MOV	i -> DL
0xb3	0o263	MOV	i -> BL
0xb4	0o264	MOV	i -> AH
0xb5	0o265	MOV	i -> CH
0xb6	0o266	MOV	i -> DH
0xb7	0o267	MOV	i -> BH
0xb8	0o270	MOV	i -> AX
0xb9	0o271	MOV	i -> CX
0xba	0o272	MOV	i -> DX
0xbb	0o273	MOV	i -> BX
0xbc	0o274	MOV	i -> SP
0xbd	0o275	MOV	i -> BP
0xbe	0o276	MOV	i -> SI
0xbf	0o277	MOV	i -> DI
0xc0	0o300
0xc1	0o301
0xc2	0o302	RET	(i + SP)
0xc3	0o303	RET
0xc4	0o304	LES
0xc5	0o305	LDS
0xc6	0o306	MOV	b, i, r/m
0xc7	0o307	MOV	w, i, r/m
0xc8	0o310
0xc9	0o311
0xca	0o312	RET	l, (i+SP)
0xcb	0o313	RET	l
0xcc	0o314	INT	Type 3
0xcd	0o315	INT	(Any)
0xce	0o316	INTO
0xcf	0o317	IRET
0xd0	0o320	Shift	b
0xd1	0o321	Shift	w
0xd2	0o322	Shift	b, v
0xd3	0o323	Shift	w, v
0xd4	0o324	AAM
0xd5	0o325	AAD
0xd6	0o326
0xd7	0o327	XLAT
0xd8	0o330	ESC	0
0xd9	0o331	ESC	1
0xda	0o332	ESC	2
0xdb	0o333	ESC	3
0xdc	0o334	ESC	4
0xdd	0o335	ESC	5
0xde	0o336	ESC	6
0xdf	0o337	ESC	7
0xe0	0o340	LOOPNZ/LOOPNE
0xe1	0o341	LOOPZ/LOOPE
0xe2	0o342	LOOP
0xe3	0o343	JCXZ
0xe4	0o344	IN	b
0xe5	0o345	IN	w
0xe6	0o346	OUT	b
0xe7	0o347	OUT	w
0xe8	0o350	CALL	d
0xe9	0o351	JMP	d
0xea	0o352	JMP	l, d
0xeb	0o353	JMP	si, d
0xec	0o354	IN	v, b
0xed	0o355	IN	v, w
0xee	0o356	OUT	v, b
0xef	0o357	OUT	v, w
0xf0	0o360	LOCK
0xf1	0o361
0xf2	0o362	REP
0xf3	0o363	REP	z
0xf4	0o364	HLT
0xf5	0o365	CMC
0xf6	0o366	Grp 1	b, r/m
0xf7	0o367	Grp 1	w, r/m
0xf8	0o370	CLC
0xf9	0o371	STC
0xfa	0o372	CLI
0xfb	0o373	STI
0xfc	0o374	CLD
0xfd	0o375	STD
0xfe	0o376	Grp 2	b, r/m
0xff	0o377	Grp 2	w, r/m
`;


let fmtdescr = `
S
0	No sign extension
1	Sign extend 8-bit immediate data to 16 bits if W=1

W
0	instruction operates on byte data
1	instruction operates on word data

D
0	Instruction source is specified in REG field
1	Instruction destination is specified in REG field

V
0	Shift/rotate count is one
1	Shift/rotate count is specified in CL register

Z
0	Repeat/loop while zero flag is clear
1	Repeat/loop while zero flag is set

MOD
0	Memory Mode, no displacement follows*
1	Memory Mode, 8-bit displacement follows
2	Memory Mode, 16-bit displacement follows
3	Register Mode (no displacement)

REG	w = 0	w = 1
0	AL	AX
1	CL	CX
2	DL	DX
3	BL	BX
4	AH	SP
5	CH	BP
6	DH	SI
7	BH	DI

R/M
R	W=0	W=1
0	AL	AX
1	CL	CX
2	DL	DX
3	BL	BX
4	AH	SP
5	CH	BP
6	DH	SI
7	BH	DI
effective address calculation
M	MOD=0	MOD=1		MOD=2
0	BX + SI	BX + SI + D8	BX + SI + D16
1	BX + DI	BX + DI + D8	BX + DI + D16
2	BP + SI	BP + SI + D8	BP + SI + D16
3	BP + DI	BP + DI + D8	BP + DI + D16
4	SI	SI + D8		SI + D16
5	DI	DI + D8		DI + D16
6	DIRECT	BP + D8		BP + D16
7	BX	BX + D8		BX + D16

0

1

Identifier	Explanation

SR	Segment register code
0	ES
1	CS
2	SS
3	DS

DATA-8	8-bit immediate constant

DATA-SX	8bit immediate value that is automatically sign-extended to 16 bits before use.

DATA-LO	low-order byte of 16-bit immediate constant

DATA-HI	high-order byte of 16-bit immediate constant

(DISP-LO)	low-order byte of optional 8- or 16-bit unsigned displacement; MOD indicates if present

(DISP-HI)	High-order byte of optional 16-bit unsigned displacement; MOD indicates if present

IP-LO	Low-order byte of new IP value

IP-HI	High-order byte of new IP value

CS-LO	Low-order byte of new CS value

CS-HI	High-order byte of new CS value

IP-INC8	8-bit signed increment to instruction pointer

IP-INC-LO	Low-order byte of signed 16-bit instruction pointer increment.

IP-INC-HI	high-order byte of signed 16-bit instruction pointer increment

ADDR-LO	Low-order byte of direct address (offset) of memory operand; EA not calculated

ADDR-HI	High-order byte of direct address (offset) of memory operand; EA not calculated.

--	Bits may contain any value

xxx	First 3 bits of ESC opcode

yyy	Second 3 bits of ESC opcode

REG8	8-bit general register operand

REG16	16-bit general register operand

MEM8	8-bit memory operand (any addressing mode).

MEM16	16-bit memory operand (any addressing mode)

IMMED8	8-bit immediate operand

IMMED16	16-bit immediate operand.

SEGREG	Segment register operand.

DEST-STR8	Byte string addressed by DI.

SRC-STR8	Byte string addressed by SI.

DEST-STR16	Word string addressed by DI.

SRC-STR16	Word string addressed by SI.

SHORT-LABEl	Label within +- 127 bytes of instruction.

NEAR-PROC	Procedure in current code segment

FAR-PROC	Procedure in another code segment

NEAR-LABEl	Label in current code segment but farther than -128 to +127 bytes from instruction

FAR-LAVEL	label in another code segment

SOURCE-TABLE	XLAT translation table addressed by BX.

OPCODE	ESC opcode operand

SOURCE	ESC register or memory operand

data	raw byte

SP-INC-LO	low order byte of SP incrament

SP-INC-HI	HIGH order byte of SP incrament

`;


